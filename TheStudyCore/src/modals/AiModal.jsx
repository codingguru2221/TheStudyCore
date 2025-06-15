import * as React from 'react';
import {
  Box, Button, Typography, Modal, TextField, IconButton, Stack, Avatar, Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { styled } from '@mui/system';

export default function AiModal({ open, onClose }) {
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState('');
  const messagesEndRef = React.useRef(null);

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

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const MessageBubble = styled(Paper)(({ theme, owner }) => ({
    maxWidth: '80%',
    marginBottom: '10px',
    padding: '10px 14px',
    borderRadius: '16px',
    alignSelf: owner === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: owner === 'user' ? '#DCF8C6' : '#f1f0f0',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  }));

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { md: 500, sm: 500, xs: 320 },
          height: { md: 500, sm: 450, xs: 400 },
          bgcolor: 'background.paper',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            p: 2,
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: '#1976d2',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Ask me anything!
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            px: 2,
            py: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {messages.map((message, index) => (
            <MessageBubble key={index} owner={message.sender}>
              <Avatar sx={{ bgcolor: message.sender === 'user' ? '#1976d2' : '#9e9e9e', width: 24, height: 24 }}>
                {message.sender === 'user' ? <PersonIcon fontSize="small" /> : <SmartToyIcon fontSize="small" />}
              </Avatar>
              <Typography variant="body2">{message.text}</Typography>
            </MessageBubble>
          ))}
          <div ref={messagesEndRef} />
        </Box>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
          <TextField
            fullWidth
            placeholder="Type your message..."
            variant="outlined"
            size="small"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </Stack>
      </Box>
    </Modal>
  );
}
