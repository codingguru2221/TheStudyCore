import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const DownloadCard = ({ title, description, fileLink }) => {
  return (
    <Card sx={{ maxWidth: 320, m: 2, borderRadius: 3, boxShadow: 3,p:4 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" minHeight={50}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box textAlign="center" width="100%">
          <Button
            variant="contained"
            fullWidth
            startIcon={<DownloadIcon />}
            href={fileLink}
            download
          >
            Download
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default DownloadCard;
