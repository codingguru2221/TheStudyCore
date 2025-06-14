import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    useTheme,
} from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Contact = () => {
    const theme = useTheme();

    return (
        <Box >


            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ContactMailIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Contact Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p:2
            }}>
                We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
            </Typography>
            <Box
                sx={{
                    minHeight: '100vh',
                    bgcolor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    px: { xs: 2, sm: 4, md: 10 },
                    py: 6,
                    display: 'flex',
                    flexWrap:{xs:'wrap',sm:'nowrap'},
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5
                }}
            >


                {/* Contact Form */}
                <Box sx={{ width: { md: '40%', sm: '100%', xs: '100%' } }}>
                    <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
                        <form>
                            <TextField
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Your Message"
                                variant="outlined"
                                margin="normal"
                                multiline
                                rows={4}
                                required
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ mt: 2 }}
                            >
                                Send Message
                            </Button>
                        </form>
                    </Paper>
                </Box>

                <Box
                    sx={{
                        width: {md:'60%',sm: '100%', xs: '100%' },
                        borderRadius: 3,
                        overflow: 'hidden',
                        height: '500px',
                        boxShadow: 3,
                    }}
                >

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2836146791396!2d77.42863139355488!3d23.232764306058638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42672d902ed7%3A0x65c3dd66d082089a!2sDB%20City%20Mall!5e0!3m2!1sen!2sin!4v1749762467620!5m2!1sen!2sin"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                    ></iframe>
                </Box>

            </Box>
        </Box>
    );
};

export default Contact;
