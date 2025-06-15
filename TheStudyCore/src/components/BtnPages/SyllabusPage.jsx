import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  MenuItem,
  Box,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ReactMarkdown from 'react-markdown';

const educationLevels = [
  { value: 'school', label: 'School' },
  { value: 'college', label: 'College' },
  { value: 'btech', label: 'B.Tech' },
  { value: 'mtech', label: 'M.Tech' },
  { value: 'phd', label: 'PhD' }
];

const SyllabusPage = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedSyllabusContent, setGeneratedSyllabusContent] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };

  const generateSyllabus = async () => {
    if (!selectedSubject || !educationLevel) {
      setSnackbar({
        open: true,
        message: 'Please enter both subject name and education level',
        severity: 'error'
      });
      return;
    }

    setLoading(true);
    setGeneratedSyllabusContent(null); // Clear previous content
    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Generate a complete syllabus for ${selectedSubject} at ${educationLevel} level`,
          pageType: 'syllabus',
          additionalData: {
            subject: selectedSubject,
            educationLevel: educationLevel
          }
        }),
      });

      const data = await res.json();
      console.log('AI Response Data:', data);
      setGeneratedSyllabusContent(data.response); // Set the entire response
      console.log('Generated Syllabus Content after set:', data.response);

      setSnackbar({
        open: true,
        message: 'Syllabus generated successfully!',
        severity: 'success'
      });
    } catch (err) {
      console.error('Error generating syllabus:', err);
      setSnackbar({
        open: true,
        message: 'Failed to generate syllabus. Please try again.',
        severity: 'error'
      });
    }
    setLoading(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          📚 Subject-wise Syllabus
        </Typography>

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Enter Subject Name"
            value={selectedSubject}
            onChange={handleSubjectChange}
            fullWidth
            placeholder="e.g., Operating Systems, Data Structures, etc."
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Education Level"
            value={educationLevel}
            onChange={handleEducationLevelChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            {educationLevels.map((level) => (
              <MenuItem key={level.value} value={level.value}>
                {level.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Button
            variant="contained"
            onClick={generateSyllabus}
            disabled={loading || !selectedSubject || !educationLevel}
            startIcon={loading ? <CircularProgress size={20} /> : <AutoStoriesIcon />}
            fullWidth
          >
            Generate Syllabus
          </Button>
        </Box>

        <Box sx={{ 
          mt: 4, 
          p: 3, 
          bgcolor: 'background.paper', 
          borderRadius: 2,
          border: '1px solid', 
          borderColor: 'grey.300',
          minHeight: '200px', // Ensure the box is visible even when empty
          display: 'flex',
          flexDirection: 'column',
          justifyContent: generatedSyllabusContent ? 'flex-start' : 'center',
          alignItems: generatedSyllabusContent ? 'flex-start' : 'center',
          overflow: 'auto',
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            mt: 2,
            mb: 1,
            color: 'primary.main'
          },
          '& p': {
            mb: 1.5,
          },
          '& ul, & ol': {
            pl: 3,
            mb: 1.5,
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
          {loading ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <CircularProgress />
              <Typography variant="h6" color="text.secondary">Generating Syllabus...</Typography>
            </Box>
          ) : generatedSyllabusContent ? (
            <>
              <Typography variant="h5" gutterBottom color="secondary">
                Generated Syllabus for {selectedSubject}
              </Typography>
              <ReactMarkdown>{generatedSyllabusContent}</ReactMarkdown>
            </>
          ) : (
            <Typography variant="h6" color="text.secondary">
              No syllabus generated yet.
            </Typography>
          )}
        </Box>
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

export default SyllabusPage;
