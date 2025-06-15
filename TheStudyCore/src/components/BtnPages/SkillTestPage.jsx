import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import ReactMarkdown from 'react-markdown';

const SkillTestPage = () => {
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiQuestion, setAiQuestion] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const generateAIQuestion = async () => {
    if (!subject) {
      setSnackbar({
        open: true,
        message: 'Please enter a subject name first',
        severity: 'error'
      });
      return;
    }

    setLoading(true);
    setAiQuestion(null); // Clear previous question
    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Generate a challenging skill test question for ${subject}, including options (A, B, C, D) and a concise explanation of the correct answer.`,
          pageType: 'skill_test',
          additionalData: {
            subject: subject,
            topic: subject // Can be refined if specific topic input is added later
          }
        }),
      });

      const data = await res.json();
      setAiQuestion(data.response);

      setSnackbar({
        open: true,
        message: 'AI question generated successfully!',
        severity: 'success'
      });
    } catch (err) {
      console.error('Error generating AI question:', err);
      setSnackbar({
        open: true,
        message: 'Failed to generate question. Please try again.',
        severity: 'error'
      });
    }
    setLoading(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          🧠 Skill Test
        </Typography>

        <TextField
          label="Enter Subject Name"
          value={subject}
          onChange={handleSubjectChange}
          fullWidth
          placeholder="e.g., Operating System, DAA, etc."
          sx={{ mb: 3 }}
        />

        <Box sx={{ mb: 3 }}>
          <Button
            variant="contained"
            onClick={generateAIQuestion}
            disabled={loading || !subject}
            startIcon={loading ? <CircularProgress size={24} /> : null}
            fullWidth
          >
            {loading ? 'Generating Question...' : 'Generate AI Question'}
          </Button>
        </Box>

        {aiQuestion && (
          <Box sx={{ 
            mb: 4, 
            p: 3, 
            bgcolor: 'background.paper', 
            borderRadius: 2,
            border: '1px solid', 
            borderColor: 'grey.300',
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              mt: 2,
              mb: 1,
            },
            '& p': {
              mb: 1,
            },
            '& ul, & ol': {
              pl: 3,
              mb: 1,
            },
            '& li': {
              mb: 0.5,
            },
            '& code': {
              bgcolor: 'action.hover',
              p: 0.5,
              borderRadius: 1,
            },
            '& pre': {
              bgcolor: 'action.hover',
              p: 2,
              borderRadius: 1,
              overflowX: 'auto',
            }
          }}>
            <Typography variant="h6" color="primary" gutterBottom>
              AI-Generated Question
            </Typography>
            <ReactMarkdown>{aiQuestion}</ReactMarkdown>
          </Box>
        )}

        {!loading && !aiQuestion && (
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="h6" color="text.secondary">
              Enter a subject and click 'Generate AI Question' to get started.
            </Typography>
          </Box>
        )}
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SkillTestPage;
