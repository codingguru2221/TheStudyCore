import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Divider,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const subjects = [
  'Mathematics-III',
  'Operating System',
  'Computer Architecture',
  'DAA',
  'Software Engineering',
];

const difficulties = ['Easy', 'Medium', 'Hard'];
const questionTypes = ['Objective', 'Subjective'];

const PaperPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: 'Mathematics-III',
    difficulty: 'Medium',
    marks: '',
    type: 'Objective',
  });

  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    
    const { subject, difficulty, marks, type } = formData;

    if (!formData.name || !marks) {
      alert('Please fill in your name and marks.');
      return;
    }

    const prompt = `Generate a ${difficulty} level ${type} question paper of ${subject} for ${marks} marks.`;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt }),
      });

      const data = await res.json();
      setAiResponse(data.response);
    } catch (err) {
      setAiResponse('⚠️ Failed to generate paper. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        {/* Paper Title */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" gutterBottom>
            📝 Semester Paper Generator
          </Typography>
        </Box>

        {/* Metadata Fields */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Select Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
          />
          

          <TextField
            select
            label="Difficulty Level"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            fullWidth
          >
            {difficulties.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Total Marks"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            type="number"
            fullWidth
          />

          <TextField
            select
            label="Type of Questions"
            name="type"
            value={formData.type}
            onChange={handleChange}
            fullWidth
          >
            {questionTypes.map((qType) => (
              <MenuItem key={qType} value={qType}>
                {qType}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Generate Button */}

        <Box textAlign="right">
          <Button
            variant="contained"
            color="primary"
            endIcon={<DownloadIcon />}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Paper'}
          </Button>
        </Box>

        {/* AI Paper Output Section */}
        {aiResponse && (
          <>
            <Divider sx={{ my: 4 }} />
            <Typography variant="h6" gutterBottom>
              📄 Generated Paper Preview
            </Typography>

            <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mt: 2 }}>
              {aiResponse}
            </Typography>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default PaperPage;
