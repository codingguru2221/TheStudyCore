import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import TeamMemberCard from "../components/AboutPage/TeamMemberCard";

const team = [
  {
    name: "PZX",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=1",
    description: "Loves React, UI design, and creative web experiences."

  },
  {
    name: "ZyZ",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=2",
    description: "Loves React, UI design, and creative web experiences."

  },
  {
    name: "XYZ",
    role: "React Developer",
    image: "https://i.pravatar.cc/150?img=3",
    description: "Loves React, UI design, and creative web experiences."

  },
  {
    name: "ZyZ",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=2",
    description: "Loves React, UI design, and creative web experiences."

  },
  {
    name: "XYZ",
    role: "React Developer",
    image: "https://i.pravatar.cc/150?img=3",
    description: "Loves React, UI design, and creative web experiences."

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
                description={ member.description}

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
