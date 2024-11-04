import React from 'react';
import { Box, Card,Avatar, Typography } from '@mui/material';

const Message = ({ sender, text }) => {
    const isUser = sender === 'user';
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', margin: 3 }}>
            <Avatar
                sx={{
                    bgcolor: isUser ? 'grey' : 'green',
                    marginRight: 1,
                }}
            >
                {isUser ? 'S' : <img src="/Icon.png" alt="AI" style={{ height: 40 }} />}
            </Avatar>
            <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, padding: 1, maxWidth: '80%' }}>
                <Typography variant="body1">{text}</Typography>
            </Card>
        </Box>
    );
};

export default Message;
