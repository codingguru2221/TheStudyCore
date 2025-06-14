import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import NotesCard from '../components/Notes/Notes';

const notesData = [
  {
    title: 'DSA Notes',
    description: 'Complete notes for Data Structures & Algorithms (C++)',
    link: 'https://example.com/dsa-notes.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm90ZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Operating System Notes',
    description: 'Unit-wise OS theory + diagrams + solved Qs',
    link: 'https://example.com/os-notes.pdf',
  },
  {
    title: 'Discrete Math Handwritten',
    description: 'Clean handwritten notes for quick revision',
    link: 'https://example.com/discrete-math.pdf',
  },
  {
    title: 'Software Engineering Video',
    description: 'YouTube playlist covering SE with examples',
    link: 'https://www.youtube.com/playlist?list=xyz',
    thumbnail: 'https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm90ZXN8ZW58MHx8MHx8fDA%3D',
  },
];

const Notes= () => {
  return (
    <Box sx={{ bgcolor: 'background', minHeight: '100vh', py: 6 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" sx={{color:'text.primary'}}>
          📚 Notes & Study Materials
        </Typography>

        <Typography variant="body1" color="text.secondary" textAlign="center" mb={6}>
          Download high-quality PDF notes, handwritten material, and helpful videos to boost your preparation.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {notesData.map((item, index) => (
            <Grid item key={index}>
              <NotesCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Notes;
