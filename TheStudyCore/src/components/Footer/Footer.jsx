import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router';

const Footer = () => {
    const theme = useTheme();

    const footerItem = [
        { lable: 'Home', path: '/home' },
        { lable: 'About', path: '/about' },
        { lable: 'Course', path: '/course' },
        { lable: 'Dashboard', path: '/dashboard' },
        { lable: "Notes & Material", path: '/notes', },
        { lable: "Downloads", path: '/download', },
        { lable: "Progress Tracker", path: '/progress' },
        { lable: "Profile", path: '/profile' },
        { lable: "Contact", path: "/contact" },



    ]

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'footerBgColor.default',
                color: 'text.primary',
                py: 6,
                px: { xs: 2, sm: 6, md: 12 },
                borderTop: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Grid container spacing={4} justifyContent="space-between">
                {/* Brand Info */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                        TheStudyCore
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Empowering learning with AI, notes & trusted resources.
                    </Typography>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                        Quick Links
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {footerItem.map((ele) => (
                            <Link
                                to={ele.path}
                                key={ele.lable}
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            color: 'text.primary',
                                        },
                                    }}
                                >
                                    {ele.lable}
                                </Typography>
                            </Link>

                        ))}
                    </Box>
                </Grid>

                {/* Social Media */}
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                        Follow Us
                    </Typography>
                    <Box>
                        <IconButton color="inherit">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Bottom text */}
            <Box textAlign="center" mt={6}>
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} TheStudyCore. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
