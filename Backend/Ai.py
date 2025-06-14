from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai




app = Flask(__name__)
CORS(app)  # Allow all origins, or configure specifically

# Configure Gemini
API_KEY = "AIzaSyDMJPxYhVOvZFwvYQ0UEvx9IEJyULgYyrU"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("models/gemini-1.5-flash")
chat = model.start_chat()

@app.route('/chat', methods=['POST'])
def chat_with_ai():
    data = request.get_json()
    user_message = data.get('message', '')

    if not user_message:
        return jsonify({'response': 'No message provided.'}), 400

    try:
        response = chat.send_message(user_message)
        return jsonify({'response': response.text.strip()})
    except Exception as e:
        return jsonify({'response': f'Error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)


# ==============================================

