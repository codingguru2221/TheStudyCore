from flask import Flask, request, jsonify
import wikipedia
import warnings

warnings.filterwarnings("ignore", category=UserWarning, module='wikipedia')

app = Flask(__name__)

@app.route('/get-summary', methods=['GET'])
def get_summary():
    query = request.args.get('query')
    sentences = int(request.args.get('sentences', 3))

    if not query:
        return jsonify({'error': 'Query parameter is required'}), 400

    try:
        return jsonify({'summary': wikipedia.summary(query, sentences=sentences)})
    
    except wikipedia.exceptions.DisambiguationError as e:
        for option in e.options:
            try:
                return jsonify({'summary': wikipedia.summary(option, sentences=sentences), 'note': f"Resolved from disambiguation using option: {option}"})
            except:
                continue
        return jsonify({'error': 'Could not resolve disambiguation automatically.'}), 500
    
    except wikipedia.exceptions.PageError:
        return jsonify({'error': 'Page does not exist on Wikipedia.'}), 404

    except Exception as e:
        return jsonify({'error': f'Unexpected error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
