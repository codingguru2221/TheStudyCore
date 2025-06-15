from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

# Configure Gemini
API_KEY = "AIzaSyDMJPxYhVOvZFwvYQ0UEvx9IEJyULgYyrU"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("models/gemini-1.5-flash")

def get_paper_prompt(subject, difficulty, marks, type):
    return f"""Generate a {difficulty} level {type} question paper for {subject} with total marks {marks}.
    Format the response as follows:
    1. Include a proper header with subject name and total marks
    2. For each question, include:
       - Question number
       - Marks allocated
       - Clear question text
    3. For objective questions, include 4 options (A, B, C, D)
    4. For subjective questions, include expected answer length
    5. End with a proper footer
    Make sure the questions are relevant to the subject and difficulty level."""

def get_skill_test_prompt(subject, topic):
    return f"""Generate a skill assessment question for {subject} focusing on {topic}.
    Format the response as follows:
    1. One challenging question that tests understanding
    2. Four options (A, B, C, D)
    3. A brief explanation of the correct answer
    4. Additional learning resources for the topic
    Make the question challenging but fair."""

def get_syllabus_prompt(subject, education_level):
    education_level_prompts = {
        'school': """Generate a school-level syllabus for {subject} with the following structure:
        1. Start with a brief introduction to the subject
        2. Divide the content into 5-6 units
        3. For each unit:
           - Unit title
           - Key concepts to be covered
           - Learning objectives
           - Basic examples and applications
        4. Include age-appropriate content and examples
        5. Focus on fundamental concepts and practical understanding""",
        
        'college': """Generate a college-level syllabus for {subject} with the following structure:
        1. Start with a comprehensive introduction
        2. Divide the content into 5-6 units
        3. For each unit:
           - Unit title
           - Detailed topics and subtopics
           - Learning objectives
           - Required readings
           - Practical applications
        4. Include both theoretical and practical aspects
        5. Focus on building strong foundational knowledge""",
        
        'btech': """Generate a B.Tech level syllabus for {subject} with the following structure:
        1. Start with a detailed introduction and scope
        2. Divide the content into 5-6 units
        3. For each unit:
           - Unit title
           - Detailed topics and subtopics
           - Learning objectives
           - Required readings and references
           - Practical applications and lab work
           - Industry relevance
        4. Include both theoretical concepts and practical implementations
        5. Focus on engineering applications and problem-solving""",
        
        'mtech': """Generate an M.Tech level syllabus for {subject} with the following structure:
        1. Start with an advanced introduction and research scope
        2. Divide the content into 5-6 units
        3. For each unit:
           - Unit title
           - Advanced topics and research areas
           - Learning objectives
           - Research papers and references
           - Implementation projects
           - Industry applications
        4. Include current research trends and developments
        5. Focus on advanced concepts and research-oriented learning""",
        
        'phd': """Generate a PhD level syllabus for {subject} with the following structure:
        1. Start with a research-oriented introduction
        2. Divide the content into 5-6 units
        3. For each unit:
           - Unit title
           - Advanced research topics
           - Learning objectives
           - Key research papers and literature
           - Research methodologies
           - Future research directions
        4. Include cutting-edge research and developments
        5. Focus on research methodology and innovation"""
    }
    
    base_prompt = education_level_prompts.get(education_level, education_level_prompts['college'])
    return base_prompt.format(subject=subject) + """\n\nFormat the entire syllabus response with each unit clearly marked as 'Unit X: [Unit Title]\n[Unit Content]'. Ensure there are at least 5 units. Each unit's content should be detailed and in markdown format."""

@app.route('/chat', methods=['POST'])
def chat_with_ai():
    data = request.get_json()
    message = data.get('message', '')
    page_type = data.get('pageType', '')
    additional_data = data.get('additionalData', {})

    if not message:
        return jsonify({'response': 'No message provided.'}), 400

    try:
        # Create a new chat for each request
        chat = model.start_chat()
        
        # Generate appropriate prompt based on page type
        if page_type == 'paper':
            prompt = get_paper_prompt(
                additional_data.get('subject'),
                additional_data.get('difficulty'),
                additional_data.get('marks'),
                additional_data.get('type')
            )
        elif page_type == 'skill_test':
            prompt = get_skill_test_prompt(
                additional_data.get('subject'),
                additional_data.get('topic')
            )
        elif page_type == 'syllabus':
            prompt = get_syllabus_prompt(
                additional_data.get('subject'),
                additional_data.get('educationLevel')
            )
        else:
            prompt = message

        response = chat.send_message(prompt)
        return jsonify({'response': response.text.strip()})
    except Exception as e:
        return jsonify({'response': f'Error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)


# ==============================================

