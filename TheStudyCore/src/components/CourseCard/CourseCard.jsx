import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router";

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
          <Link to={'/courseDetail'}>
            <Button variant="contained" size="small" sx={{ textTransform: 'none' }}>
              View more
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
