import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const CourseCard = ({ title, description, duration }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        transition: "transform 0.3s",
        ":hover": { transform: "scale(1.05)" },
        borderRadius: 3,
        boxShadow: 3,
        p: 1,
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="caption" color="primary" gutterBottom>
          Duration: {duration}
        </Typography>
        <Box mt={2}>
          <Button variant="contained" size="small">
            Enroll Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
