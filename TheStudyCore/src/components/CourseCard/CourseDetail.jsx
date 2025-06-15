import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Avatar,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const syllabus = [
    {
        title: "React Basics",
        details: "Introduction to React, JSX, virtual DOM, functional vs class components.",
        link: "https://reactjs.org/docs/getting-started.html",
        pdf: "/pdfs/react-basics.pdf"
    },
    {
        title: "Components & Props",
        details: "Creating reusable components, passing data using props.",
        link: "https://legacy.reactjs.org/docs/components-and-props.html",
        pdf: "/pdfs/components-props.pdf"
    },
    {
        title: "State & Lifecycle",
        details: "Managing state, lifecycle methods, useState and useEffect hooks.",
        link: "https://reactjs.org/docs/state-and-lifecycle.html",
        pdf: "/pdfs/state-lifecycle.pdf"
    },
    {
        title: "Routing",
        details: "Using React Router for navigation, nested routes, route parameters.",
        link: "https://reactrouter.com/en/main/start/tutorial",
        pdf: "/pdfs/react-routing.pdf"
    },
    {
        title: "APIs & Hooks",
        details: "Fetching data using fetch/axios, useEffect, custom hooks.",
        link: "https://reactjs.org/docs/hooks-overview.html",
        pdf: "/pdfs/apis-hooks.pdf"
    },
];

const CourseDetail = () => {
    return (
        <Box
            sx={{
                p: { md: "3rem 6rem", xs: 2 },
                backgroundColor: "#f9f9fb",
                minHeight: "100vh",
            }}
        >
            {/* Title */}
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{fontSize:'2rem'}}>
                🚀 Complete React Developer Course
            </Typography>

            {/* Video + Learning */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: { xs: "wrap", sm: "nowrap" },
                    justifyContent: "space-between",
                    gap: { md: 8, xs: 3 },
                    mt: 4,
                }}
            >
                {/* Video */}
                <Box
                    sx={{
                        height: { md: "22rem", sm: "20rem", xs: "16rem" },
                        width: { md: "45%", xs: "100%" },
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: 3,
                    }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/EHTWMpD6S_0?si=UfH1DWJfUh5NDLXE"
                        title="React Course"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "8px",
                        }}
                    ></iframe>
                </Box>

                {/* Right Side */}
                <Box sx={{ width: { md: "50%", xs: "100%" } }}>
                    <Typography variant="h5" mb={1}>
                        What You'll Learn
                    </Typography>
                    <List dense>
                        {[
                            "Build modern React apps from scratch",
                            "Master React Hooks & Context API",
                            "Integrate with REST APIs",
                            "Deploy React projects",
                        ].map((point, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={point} />
                            </ListItem>
                        ))}
                    </List>

                    {/* Course Info */}
                    <Box mt={3}>
                        <Typography variant="h5" mb={1}>
                            Course Information
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Chip label="⏱ Duration: 6 weeks" color="info" />
                            </Grid>
                            <Grid item>
                                <Chip label="📊 Level: Intermediate" color="secondary" />
                            </Grid>
                            <Grid item>
                                <Chip label="🗣 Language: English" color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="📜 Certificate: Yes" color="success" />
                            </Grid>
                        </Grid>
                    </Box>
                    {/* Enroll & Resource Buttons */}
                    <Box mt={4} display="flex" gap={2} flexWrap="wrap">
                        <Button variant="contained" size="large" color="primary"
                            sx={{ textTransform: 'none' }}
                        >
                            Enroll Now
                        </Button>

                        <Button
                            variant="outlined"
                            color="info"
                            href="https://reactjs.org/docs/getting-started.html"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                        >
                            🌐 Visit Official Website
                        </Button>

                        <Button
                            variant="outlined"
                            color="success"
                            href="/pdfs/react-course-outline.pdf"
                            download
                            sx={{ textTransform: 'none' }}
                        >
                            📄 Download Full Course PDF
                        </Button>
                    </Box>

                </Box>
            </Box>

            {/* Syllabus */}
            <Box mt={6}>
                <Typography variant="h5" gutterBottom>
                    📚 Course Syllabus
                </Typography>
                {syllabus.map((item, index) => (
                    <Accordion key={index} sx={{ backgroundColor: "#fff", boxShadow: 1 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight="bold">{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">{item.details}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

        </Box>
    );
};

export default CourseDetail;
