import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  LinearProgress,
  Checkbox,
  FormControlLabel,
  Grid,
  Chip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const coursesData = [
  {
    title: '📘 Discrete Mathematics',
    topics: ['Set Theory', 'Relations', 'Groups', 'Boolean Algebra'],
  },
  {
    title: '💡 Digital Systems',
    topics: ['Number System', 'Boolean Functions', 'K-Map', 'Flip-Flops'],
  },
  {
    title: '📚 Data Structures',
    topics: ['Arrays', 'Linked List', 'Stacks', 'Trees']
  },
  {
    title: '📚 Data Structures',
    topics: ['Arrays', 'Linked List', 'Stacks', 'Trees'],
  },
  {
    title: '📚 Data Structures',
    topics: ['Arrays', 'Linked List', 'Stacks', 'Trees']
  },
  {
    title: '📚 Data Structures',
    topics: ['Arrays', 'Linked List', 'Stacks', 'Trees'],
  },
];

const ProgressTracker = () => {
  const [progressState, setProgressState] = useState(
    coursesData.map(course => course.topics.map(() => false))
  );

  const handleCheck = (courseIndex, topicIndex) => {
    const updated = [...progressState];
    updated[courseIndex][topicIndex] = !updated[courseIndex][topicIndex];
    setProgressState(updated);
  };

  const calculateProgress = topicStates =>
    (topicStates.filter(Boolean).length / topicStates.length) * 100;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        bgcolor: 'background.default',

        p: { md: '3rem 6rem', xs: '1rem' },
      }}
    >
      <Box sx={{
        p: { md: 4, sm: 2, xs: 2 },
        bgcolor: 'background.default',
        borderRadius: 4,
        boxShadow: 4,
      }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          sx={{ mb: 4 }}
        >
          📈 Study Progress Tracker
        </Typography>

        <Box sx={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:5}}>
          {coursesData.map((course, courseIndex) => {
            const progress = calculateProgress(progressState[courseIndex]);

            return (
              <Box  key={course.title}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <SchoolIcon color="primary" />
                    <Typography variant="h6" fontWeight="bold">{course.title}</Typography>
                  </Box>

                  {course.topics.map((topic, topicIndex) => (
                    <FormControlLabel
                      key={topic}
                      control={
                        <Checkbox
                          checked={progressState[courseIndex][topicIndex]}
                          onChange={() => handleCheck(courseIndex, topicIndex)}
                          color="primary"
                        />
                      }
                      label={topic}
                      sx={{ ml: 1, display: 'flex',width:{md:'15rem',sm:'15rem',xs:'auto'} }}
                    />
                  ))}

                  <Box sx={{ mt: 2 }}>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: '#eee',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: progress >= 100 ? '#4caf50' : '#1976d2',
                        },
                      }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {progress}% Completed
                      </Typography>
                      {progress === 100 && (
                        <Chip label="Done" color="success" size="small" icon={<DoneAllIcon />} />
                      )}
                    </Box>
                  </Box>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressTracker;
