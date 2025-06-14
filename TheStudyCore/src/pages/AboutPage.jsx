import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import TeamMemberCard from "../components/AboutPage/TeamMemberCard";
import ladduImg from '../assets/ladduImg1.png'
import kailasImg from '../assets/kailash.png'
import preetImg from '../assets/preet.png'
import codexImg from '../assets/codex.png'

const team = [
  {
    name: "Veerendra Vishwakarma ",
    role: "Full Stack Developer",
    image: codexImg,
    description: "Builds both the frontend and backend of applications, ensuring smooth integration and top-notch performance."

  },
  {
    name: "Kajal Manjhi",
    role: "Backend Developer",
    image: ladduImg,
    description: "Expert in server-side logic, APIs, and database management, ensuring data flows efficiently and securely."

  },
  {
    name: "Kailas Hariprasad",
    role: "Frontend Developer",
    image: kailasImg,
    description: "Specializes in crafting responsive and interactive user interfaces using modern frameworks like React."

  },
  {
    name: "Preet Nagar",
    role: "UI/UX Designer",
    image: preetImg,
    description: "Designs intuitive user experiences and beautiful interfaces focused on usability, consistency, and visual appeal."

  },

];

const About = () => {
  return (
    <Box sx={{ p: { md: "2rem 6rem 2rem 6rem", xs: 0, sm: 0 } }}>
      {/* Header */}
      <Box sx={{ bgcolor: "#3241B8", color: "white", py: 6, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">
          About Us
        </Typography>
        <Typography variant="subtitle1" mt={1}>
          Empowering learners through practical tech education.
        </Typography>
      </Box>

      {/* About Description */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Who We Are
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          We are a passionate team of developers, educators, and designers committed to building practical, real-world tech skills. Our mission is to make learning accessible, engaging, and effective for everyone — whether you're a beginner or aiming to go pro.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Our Team */}
        <Typography variant="h5" fontWeight="bold" mb={4}>
          Meet the Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {team.map((member, index) => (
            <Grid item key={index}>
              <TeamMemberCard
                name={member.name}
                role={member.role}
                image={member.image}
                description={member.description}

              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Quote */}
      <Box textAlign="center" py={6} bgcolor="">
        <Typography variant="h6" fontStyle="italic" sx={{ color: 'text.primary' }}>
          "We don't just teach tech — we create builders."
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
