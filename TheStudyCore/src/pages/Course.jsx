import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import CourseCard from "../components/CourseCard/CourseCard";
import { Link } from "react-router";

const courseList = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript and build real websites.",
    duration: "8 weeks",
  },
  {
    title: "Python Programming",
    description: "Master Python from basics to advanced concepts.",
    duration: "6 weeks",
  },
  {
    title: "React.js Masterclass",
    description: "Build interactive UIs using React and Hooks.",
    duration: "5 weeks",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Crack coding interviews with strong DSA concepts.",
    duration: "7 weeks",
  },
];

const Courses = () => {
  return (
    <Box sx={{ p: { md: "2rem 6rem 2rem 6rem", xs: 0, sm: 0 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "#3241B8",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Explore Our Courses
        </Typography>
        <Typography variant="subtitle1" mt={1}>
          Upskill yourself with practical learning.
        </Typography>
      </Box>

      {/* Courses Grid */}
      <Container sx={{ my: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {courseList.map((course, index) => (
            <Grid item key={index}>
              <CourseCard
                title={course.title}
                description={course.description}
                duration={course.duration}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box textAlign="center" py={4}>
        <Typography variant="h5" mb={2}>
          Want a custom learning plan?
        </Typography>
        <Button variant="outlined" size="large">
          <Link to={'/contact'} style={{ textDecoration: 'none' }}>
            Contact Us
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Courses;
