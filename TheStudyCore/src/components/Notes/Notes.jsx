import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

const NotesCard = ({ title, description, link, thumbnail }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 2, borderRadius: 3, boxShadow: 4 }}>
      <CardMedia
        component="img"
        loading="lazy"
        height="160"
        image={thumbnail || 'https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm90ZXN8ZW58MHx8MHx8fDA%3D'}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" minHeight={60}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          endIcon={<DescriptionIcon />}
          href={link}
          target="_blank"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default NotesCard;
