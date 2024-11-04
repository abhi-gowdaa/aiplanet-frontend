import React from 'react';
import { Box, Card, Avatar, Typography } from '@mui/material';

const Message = ({ sender, text }) => {
    const isUser = sender === 'user'; // Check if the message sender is the user

    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', margin: 3 }}>
            {/* Avatar for message sender */}
            <Avatar
                sx={{
                    bgcolor: isUser ? 'grey' : 'green', // Grey for user, green for AI logo
                    marginRight: 1,
                }}
            >
                {isUser ? 'S' : <img src="/Icon.png" alt="AI" style={{ height: 40 }} />} {/* Display 'S' for user, AI icon for AI */}
            </Avatar>

            {/* Message card with text content */}
            <Card
                sx={{
                    backgroundColor: '#f5f5f5',  
                    borderRadius: 1, 
                    padding: 1,  
                    maxWidth: '80%',  
                }}
            >
                <Typography variant="body1">{text}</Typography> {/* Display message text */}
            </Card>
        </Box>
    );
};

export default Message;
