# TheStudyCore - AI-Powered Educational Platform

TheStudyCore is a modern educational platform that leverages artificial intelligence to enhance the learning experience. It provides tools for generating question papers, conducting skill tests, creating syllabi, and engaging in AI-powered conversations.

## 🌟 Features

### 1. AI Question Paper Generator
- Generate customized question papers based on subject and difficulty level
- Support for multiple subjects including:
  - Mathematics
  - Physics
  - Chemistry
  - Biology
  - Computer Science
  - English
  - History
  - Geography
- Adjustable difficulty levels (Easy, Medium, Hard)
- Real-time AI-powered question generation

### 2. AI Skill Test System
- Create personalized skill assessments
- Support for multiple subjects
- Customizable test parameters
- Real-time evaluation and feedback
- Markdown support for formatted responses

### 3. AI Syllabus Generator
- Generate comprehensive course syllabi
- Support for multiple subjects
- Detailed topic breakdowns
- Learning objectives and outcomes
- Markdown formatting for better readability

### 4. AI Chat Interface
- Interactive chat with AI assistant
- Real-time responses
- Markdown support for formatted messages
- Context-aware conversations
- Educational support and guidance

## 🛠️ Technology Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- React Icons
- React Markdown

### Backend
- Node.js
- Express.js
- MongoDB
- OpenAI API Integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/TheStudyCore.git
cd TheStudyCore
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Configure environment variables:
Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd ../frontend
npm start
```

## 📁 Project Structure

```
TheStudyCore/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for providing the AI capabilities
- React and Node.js communities for their excellent documentation
- All contributors who have helped shape this project
