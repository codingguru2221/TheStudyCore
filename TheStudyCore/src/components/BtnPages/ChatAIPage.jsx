import React, { useState, useRef, useEffect } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
  Paper,
  IconButton,
  Container,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import ReactMarkdown from 'react-markdown';

const ChatAiPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage = { sender: 'user', text: inputMessage.trim() };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputMessage('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newUserMessage.text }),
      });

      const data = await res.json();
      const aiResponse = { sender: 'ai', text: data.response };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error('Error communicating with AI:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: 'Sorry, I am having trouble connecting. Please try again later.' },
      ]);
    }
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleSendMessage();
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <SmartToyIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4" gutterBottom>
            AI Chat Assistant
          </Typography>
        </Box>

        <Box 
          sx={{
            height: '500px', 
            overflowY: 'auto', 
            border: '1px solid', 
            borderColor: 'grey.300', 
            borderRadius: 2, 
            p: 2, 
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            bgcolor: 'background.default',
          }}
        >
          {messages.length === 0 ? (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 'auto', mb: 'auto' }}>
              Start a conversation by typing a message below.
            </Typography>
          ) : (
            messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    p: 1.5,
                    maxWidth: '70%',
                    bgcolor: msg.sender === 'user' ? 'primary.light' : 'background.paper',
                    color: msg.sender === 'user' ? 'primary.contrastText' : 'text.primary',
                    borderRadius: '20px',
                    borderTopLeftRadius: msg.sender === 'user' ? '20px' : '5px',
                    borderTopRightRadius: msg.sender === 'user' ? '5px' : '20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  {msg.sender === 'ai' && <SmartToyIcon sx={{ fontSize: 20, color: 'primary.dark' }} />}
                  <Box sx={{
                    '& p': { margin: 0 }, // Reset margin for paragraphs inside markdown
                    '& h1, & h2, & h3, & h4, & h5, & h6': {
                      mt: 1,
                      mb: 0.5,
                    },
                    '& ul, & ol': {
                      pl: 2,
                      mb: 0.5,
                    },
                    '& li': {
                      mb: 0.2,
                    },
                    '& code': {
                      bgcolor: 'action.selected',
                      p: 0.3,
                      borderRadius: 1,
                    },
                    '& pre': {
                      bgcolor: 'action.selected',
                      p: 1,
                      borderRadius: 1,
                      overflowX: 'auto',
                    }
                  }}>
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </Box>
                  {msg.sender === 'user' && <PersonIcon sx={{ fontSize: 20, color: 'primary.dark' }} />}
                </Paper>
              </Box>
            ))
          )}
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">AI is typing...</Typography>
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            sx={{ 
              flexGrow: 1, 
              '& .MuiOutlinedInput-root': {
                borderRadius: '25px',
                pr: 0.5,
              }
            }}
          />
          <IconButton
            color="primary"
            onClick={handleSendMessage}
            disabled={loading || inputMessage.trim() === ''}
            sx={{ 
              p: 1.5, 
              bgcolor: 'primary.main', 
              color: 'primary.contrastText', 
              '&:hover': { bgcolor: 'primary.dark' },
              borderRadius: '50%',
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default ChatAiPage;
