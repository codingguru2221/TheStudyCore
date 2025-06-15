import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import AiModal from '../../modals/AiModal';

const ChatAiPage = ({ formData }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                🤖 Welcome to Chat AI Assistant
            </Typography>

            {formData ? (
                <Box sx={{ mt: 2 }}>
                    <Typography><strong>Name:</strong> {formData.name}</Typography>
                    <Typography><strong>Subject:</strong> {formData.subject}</Typography>
                    <Typography><strong>Difficulty:</strong> {formData.difficulty}</Typography>
                    <Typography><strong>Marks:</strong> {formData.marks}</Typography>
                    <Typography><strong>Type:</strong> {formData.type}</Typography>

                    <Button
                        variant="contained"
                        sx={{ mt: 3 }}
                        onClick={() => setOpenModal(true)}
                    >
                        💬 Open AI Chat
                    </Button>
                </Box>
            ) : (
                <Typography>Please fill the form first.</Typography>
            )}

            {/* AI Chat Modal */}
            <AiModal open={openModal} onClose={() => setOpenModal(false)}
                initialPrompt={`Generate a ${formData.type} question in ${formData.subject} with ${formData.difficulty} difficulty of ${formData.marks} marks.`}

            />
        </Box>
    );
};

export default ChatAiPage;
