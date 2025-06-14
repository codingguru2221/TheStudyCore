import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Stack,
  Divider,
} from "@mui/material";

const TeamMemberCard = ({ name, role, image, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 260,
        mx: "auto",
        borderRadius: 4,
        boxShadow: 6,
        transition: "0.3s",
        p: 2,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
        },
       
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Avatar
          alt={name}
          src={image}
          loading="lazy"
          sx={{ width: 90, height: 90, border: "3px solid #fff", boxShadow: 3 }}
        />
        <Box textAlign="center">
          <Typography variant="h6" fontWeight="bold">
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontStyle="italic"
          >
            {role}
          </Typography>
        </Box>
        {description && (
          <>
            <Divider flexItem />
            <Typography variant="caption" color="text.secondary" textAlign="center">
              {description}
            </Typography>
          </>
        )}
      </Stack>
    </Card>
  );
};

export default TeamMemberCard;
