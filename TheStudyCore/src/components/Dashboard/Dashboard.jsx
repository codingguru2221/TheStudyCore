import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router';
import BasicPie from '../Charts/PieChart';
import BasicBars from '../Charts/BarChart';
import BasicArea from '../Charts/LineChart';

const Dashboard = () => {



  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { md: '6rem', xs: 2 },
        py: 4,
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: 'text.primary' }} mb={4}>
        Dashboard
      </Typography>

      <Box
        sx={{
          bgcolor: 'dashboardBg.default',
          borderRadius: 4,
          width: '100%',
          minHeight: '70vh',
          mx: 'auto',
          p: 4,
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          justifyContent: 'center',
          alignItems: 'start',
          gap: 5,
          boxShadow: 3,
        }}
      >
        {/* Left Section */}
        {/* <Box
          sx={{
            width: { xs: '100%', sm: '40%', md: '30%' },
            bgcolor: 'profilebg.default',
            height: '30rem',
            p: 4,
            borderRadius: '20px',
            boxShadow: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src="https://via.placeholder.com/100"
            />
          </Box>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                color: ' cardBtnColor.default',
                bgcolor: 'cardBtn2.primary',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                '&:hover': {
                  bgcolor: 'cardBtn2.secondary',
                },
              }}
            >
              <Link to={'/profile'} style={{ textDecoration: 'none' }}>
                Edit Profile
              </Link>
            </Button>
          </Box>
          <Box sx={{ borderTop: '1px solid #ccc', pt: 2 }}>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ color: 'text.secondary' }}
            >
              Write your bio here...
            </Typography>
          </Box>
        </Box> */}

        {/* Right Section */}
        <Box sx={{ width: { md: '80%', sm: '100%', xs: '100%' } }}>
          {/* <Typography variant="h5" fontWeight="bold" color="white">
            Swati Kumari
          </Typography>
          <Typography color="white" mb={3}>
            @swati_k
          </Typography> */}

          {/* Stats / Cards Row 1 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              flexWrap: 'wrap',
              mb: 4,
            }}
          >
            <Box
              sx={{
                flex: '1 1 0',
                height: 'auto',
                width: 'auto',
                bgcolor: 'profilebg.default',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'text.secondary',
                boxShadow: 1,
              }}
            >
              <BasicPie />
            </Box>
            <Box
              sx={{
                flex: '1 1 0',
                height: 'auto',
                width: 'auto',
                bgcolor: 'profilebg.default',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'text.secondary',
                boxShadow: 1,
              }}
            >
              <BasicBars />
            </Box>

          </Box>

          {/* Stats / Cards Row 2 */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: 3,
            }}
          >
            <Box
              sx={{
                flex: '1 1 0',
                height: 'auto',
                width: 'auto',
                bgcolor: 'profilebg.default',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'text.secondary',
                boxShadow: 1,
              }}
            >
              <BasicArea />
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
