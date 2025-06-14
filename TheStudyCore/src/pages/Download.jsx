import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import DownloadCard from '../components/Download/DownloadCard';

const downloads = [
  {
    title: 'Semester 4 Syllabus',
    description: 'PDF syllabus for all subjects - RGPV 4th Sem CSE',
    fileLink: '/downloads/sem4-syllabus.pdf',
  },
  {
    title: 'ADA Notes PDF',
    description: 'Unit-wise notes of Analysis & Design of Algorithms',
    fileLink: '/downloads/ada-notes.pdf',
  },
  {
    title: 'Previous Year Questions',
    description: 'Last 5 years solved PYQs of Operating Systems',
    fileLink: '/downloads/os-pyq.pdf',
  },
  {
    title: 'Assignments Pack',
    description: 'Standard assignments for Software Engineering',
    fileLink: '/downloads/se-assignments.pdf',
  },
];

const DownloadPage = () => {
  return (
    <Box sx={{ bgcolor: 'background', minHeight: '100vh', py: 6 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
          🔽 Download Center
        </Typography>
        <Typography variant="body1" textAlign="center" mb={5} color="text.secondary">
          Download syllabus, notes, assignments, and sample papers in one click.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {downloads.map((item, index) => (
            <Grid item key={index}>
              <DownloadCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DownloadPage;
