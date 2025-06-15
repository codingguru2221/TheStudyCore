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
        <>
        <Box
            sx={{
                p: { md: "3rem 6rem", xs: 2 },
                backgroundColor: "#f9f9fb",
                minHeight: "100vh",
            }}
        >
            {/* Title */}
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{fontSize:'2rem'}}>
                🚀 Complete Developer Course
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
                        src="https://www.youtube.com/embed/MDZC8VDZnV8"
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
                            🌐 React Official Website
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

                    {/* Additional Resource Buttons */}
                    <Box mt={2} display="flex" gap={2} flexWrap="wrap">
                        <Button
                            variant="outlined"
                            color="secondary"
                            href="https://www.w3schools.com/"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                        >
                            📚 W3Schools
                        </Button>

                        <Button
                            variant="outlined"
                            color="secondary"
                            href="https://www.geeksforgeeks.org/"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                        >
                            💻 GeeksforGeeks
                        </Button>

                        <Button
                            variant="outlined"
                            color="secondary"
                            href="https://web.dev/"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                        >
                            🌐 Web.dev
                        </Button>

                        <Button
                            variant="outlined"
                            color="secondary"
                            href="https://www.codecademy.com/"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                        >
                            🎓 Codecademy
                        </Button>

                        <Button
                            variant="outlined"
                            color="secondary"
                            href="https://www.udemy.com/"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                        >
                            📖 Udemy
                        </Button>

                        <Button
                            variant="outlined"
                            color="secondary"
                            href="https://www.codewithharry.com/"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                        >
                            👨‍💻 CodeWithHarry
                        </Button>

                        <Button
                            variant="outlined"
                            color="secondary"
                            href="https://www.apnacollege.in/"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                        >
                            🏫 Apna College
                        </Button>
                    </Box>

                </Box>
            </Box>

            {/* Additional Videos Grid */}
            <Box sx={{ p: { md: "3rem 6rem", xs: 2 } }}>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                    More Course Videos
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/hKB-YGF14SY"
                                title="React Course Video 2"
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
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/RGKi6LSPDLU"
                                title="React Course Video 3"
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
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/BsDoLVMnmZs"
                                title="React Course Video 4"
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
                    </Grid>
                </Grid>
            </Box>

            {/* Second Row of Videos */}
            <Box sx={{ p: { md: "0 6rem", xs: 2 }, mt: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/l1EssrLxt7E"
                                title="React Course Video 5"
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/QZfaRHzWM0k"
                                title="React Course Video 6"
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/VlPiVmYuoqw"
                                title="React Course Video 7"
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/hlGoQC332VM"
                                title="React Course Video 8"
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
                    </Grid>
                </Grid>
            </Box>

            {/* Third Row of Videos */}
            <Box sx={{ p: { md: "0 6rem", xs: 2 }, mt: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/XlvsJLer_No"
                                title="React Course Video 9"
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/DbcLg8nRWEg"
                                title="React Course Video 10"
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/k7ELO356Npo"
                                title="React Course Video 11"
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/E6tAtRi82QY"
                                title="React Course Video 12"
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
                    </Grid>
                </Grid>
            </Box>

            {/* Fourth Row of Videos */}
            <Box sx={{ p: { md: "0 6rem", xs: 2 }, mt: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/gY5sGvq-8h8"
                                title="React Course Video 13"
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/ESnrn1kAD4E"
                                title="React Course Video 14"
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/j6Ule7GXaRs"
                                title="React Course Video 15"
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "16rem",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/EceJQ05KTf4"
                                title="React Course Video 16"
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
                    </Grid>
                </Grid>
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
        
        </>
    );
};

export default CourseDetail;
