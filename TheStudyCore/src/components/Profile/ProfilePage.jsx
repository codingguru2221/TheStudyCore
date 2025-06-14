import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
  LinearProgress,
  Switch,
  Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProfilePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: 'background.default',
        minHeight: '100vh',
        p: { md: '3rem 6rem', xs: '1rem' },
      }}
    >
      <Box
        sx={{
          flex: 1,
          p: { md: 4, sm: 2, xs: 2 },
          bgcolor: 'background.paper',
          borderRadius: 4,
          boxShadow: 4,
        }}
      >
        {/* Heading */}
        <Typography variant="h4" fontWeight="bold" mb={3} color="text.primary">
          Profile
        </Typography>

        {/* Profile Info */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
            flexDirection: { xs: 'column', sm: 'row' },
            mb: 3,
          }}
        >
          {/* Avatar and Basic Info */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              flexDirection: { xs: 'row', sm: 'row' },
            }}
          >
            <Avatar
              src="https://plus.unsplash.com/premium_photo-1675030733206-a74eb681d159?w=600"
              sx={{ width: 90, height: 90 }}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold" color="text.primary">
                Sophia Carter
              </Typography>
              <Typography color="text.secondary">@sophia.carter</Typography>
              <Typography sx={{ color: 'primary.main' }}>B.Tech CSE</Typography>
            </Box>
          </Box>

          {/* Edit Button */}
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            sx={{
              bgcolor: 'primary.main',
              color: '#fff',
              px: 3,
              py: 1,
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Edit Profile
          </Button>
        </Box>

        {/* Bio */}
        <Typography color="text.secondary" mb={4} fontSize="1rem">
          I’m a passionate computer science student at the University of Technology,
          specializing in software development. I love exploring new technologies
          and contributing to open-source projects.
        </Typography>

        {/* Learning Overview */}
        <Typography variant="h6" fontWeight="bold" color="text.primary" mb={2}>
          Learning Overview
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
          <Paper
            elevation={2}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 3,
              bgcolor: 'background.default',
              minWidth: 200,
            }}
          >
            <Typography color="text.secondary" gutterBottom>
              Total Study Hours
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="primary.main">
              120
            </Typography>
          </Paper>

          <Paper
            elevation={2}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 3,
              bgcolor: 'background.default',
              minWidth: 200,
            }}
          >
            <Typography color="text.secondary" gutterBottom>
              Doubts Solved
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="primary.main">
              45
            </Typography>
          </Paper>
        </Box>

        {/* Progress Section */}
        <Typography variant="h6" fontWeight="bold" color="text.primary" mb={1}>
          Progress
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Course Completion
          </Typography>
          <LinearProgress
            variant="determinate"
            value={75}
            sx={{ height: 10, borderRadius: 5, mt: 1 }}
          />
          <Typography align="right" fontSize="0.85rem" mt={0.5} color="text.secondary">
            75%
          </Typography>
        </Box>

        {/* Settings */}
        {/* <Typography variant="h6" fontWeight="bold" color="text.primary" mb={1}>
          Settings
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography color="text.secondary">Dark Mode</Typography>
          <Switch sx={{ ml: 2 }} />
        </Box> */}
      </Box>
    </Box>
  );
};

export default ProfilePage;
