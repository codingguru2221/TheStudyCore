import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Slide, useTheme } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NotesIcon from '@mui/icons-material/MenuBook';
import VerifiedIcon from '@mui/icons-material/VerifiedUser';
import SearchIcon from '@mui/icons-material/Search';

const featureData = [
    {
        title: 'AI Doubt Solver',
        description: 'Get instant answers to your questions with our smart AI assistant.',
        icon: (theme) => <AutoAwesomeIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
    },
    {
        title: 'Free Notes',
        description: 'Access a wide range of organized and exam-oriented study materials.',
        icon: (theme) => <NotesIcon fontSize="large" sx={{ color: theme.palette.secondary.main }} />,
    },
    {
        title: 'Trusted Resources',
        description: 'Find reliable references, links & external learning resources.',
        icon: (theme) => <VerifiedIcon fontSize="large" sx={{ color: theme.palette.cardBtn }} />,
    },
    {
        title: 'Smart Search',
        description: 'Search topics, create quizzes, and tailor your learning easily.',
        icon: (theme) => <SearchIcon fontSize="large" sx={{ color: theme.palette.cardBtn2 }} />,
    },
];

const Features = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: 8,
                px: { xs: 2, sm: 4, md: 10 },
                bgcolor: theme.palette.background.default, // ✅ themed background
            }}
        >
            <Typography
                variant="h4"
                fontWeight={800}
                gutterBottom
                sx={{
                    color: 'text.primary',
                    mb: 4,
                }}
            >
                ✨ Features We Offer
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 4,
                    justifyContent: 'center',
                }}
            >
                {featureData.map((item, index) => (
                    <Slide direction="up" in={true} timeout={300 + index * 200} key={item.title}>
                        <Card
                            elevation={6}
                            sx={{
                                width: 260,
                                height: 250,
                                borderRadius: 4,
                                px: 2,
                                py: 4,
                                textAlign: 'center',
                                bgcolor: 'background', // ✅ themed card
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: `0 8px 20px ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.1)'}`,
                                },
                            }}
                        >
                            <Box sx={{ mb: 2 }}>
                                {item.icon(theme)} {/* Pass theme to icon for dynamic color */}
                            </Box>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    fontWeight={700}
                                    gutterBottom
                                    sx={{ color:'text.primary '}}
                                >
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Slide>
                ))}
            </Box>
        </Box>
    );
};

export default Features;
