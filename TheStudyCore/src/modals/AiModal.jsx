import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton'; // Import IconButton
import { Stack } from '@mui/material'; // Import Stack for layout


export default function AiModal({ open, onClose }) {
  const [messages, setMessages] = React.useState([]); // Initialize messages state
  const [newMessage, setNewMessage] = React.useState(''); // State for the text field

 const handleSendMessage = async () => {
  if (newMessage.trim() !== '') {
    const userMsg = { text: newMessage, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setNewMessage('');

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMessage }),
      });

      const data = await response.json();
      const aiMsg = { text: data.response, sender: 'ai' };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Error contacting AI.", sender: 'ai' }]);
    }
  }
};


  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { md: 500, sm: 500, xs: 300 },
          height: { md: 400, sm: 400, xs: 300 },
          bgcolor: 'background.paper',
          border: '1px solid #888', // More subtle border
          borderRadius: '8px', // Add some rounding
          boxShadow: 24,
          p: 3, // Reduced padding
          display: 'flex',
          flexDirection: 'column', // Stack children vertically
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Ask me anything!
        </Typography>

        <Box sx={{ flexGrow: 1, overflow: 'auto', mb: 2, p: 2 }}>
          {/* Render the chat messages */}
          {messages.map((message, index) => (
            <Typography key={index} variant="body2" sx={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
              {message.text}
            </Typography>
          ))}
        </Box>

        <Stack direction="row" spacing={1} alignItems="center">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Type your message..."
            variant="outlined"
            size="small" // Use smaller size for a cleaner look
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <IconButton color="primary" aria-label="send" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </Stack>
      </Box>
    </Modal>
  );
}
