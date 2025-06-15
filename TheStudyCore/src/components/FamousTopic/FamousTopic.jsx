import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import FunctionsIcon from '@mui/icons-material/Functions';
import ScienceIcon from '@mui/icons-material/Science';
import WebIcon from '@mui/icons-material/Web';
import { useTheme } from '@mui/material';
import { Link } from 'react-router';

const topics = [
    { name: 'C++', icon: <CodeIcon color="primary" fontSize="large" /> },
    { name: 'Math', icon: <FunctionsIcon sx={{ color: '#6a1b9a' }} fontSize="large" /> },
    { name: 'Physics', icon: <ScienceIcon sx={{ color: '#0288d1' }} fontSize="large" /> },
    { name: 'Web Development', icon: <WebIcon sx={{ color: '#f57c00' }} fontSize="large" /> },
];

const FamousTopic = () => {
    const theme = useTheme(); // ✅ access custom theme

    return (
        <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, py: 8 }}>
            <Typography
                variant="h4"
                fontWeight={800}
                sx={{
                    mb: 4, color: theme.palette.text.primary,
                }}
            >
                🚀 Famous Topics
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 4,
                    justifyContent: 'center',
                }}
            >
                {topics.map((topic, idx) => (
                    <Card
                        key={idx}
                        elevation={6}
                        sx={{
                            width: 220,
                            height: 200,
                            borderRadius: 4,
                            bgcolor: 'cardBgColor.primary',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 3,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
                            },
                        }}
                    >
                        <Box sx={{ mb: 1 }}>{topic.icon}</Box>
                        <CardContent sx={{ textAlign: 'center', p: 0 }}>
                            <Typography
                                sx={{
                                    fontSize: '1.3rem',
                                    fontWeight: 600,
                                    color: 'text.secondary',
                                }}
                            >
                                {topic.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={'/course'}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        color: 'background.paper',
                                        bgcolor: 'cardBtn.primary',
                                        height: '2.5rem',
                                        borderRadius: '10px',
                                        width: '7rem',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: 'cardBtn.primary',
                                        },
                                    }}
                                >
                                    Explore
                                </Button>
                            </Link>

                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default FamousTopic;
