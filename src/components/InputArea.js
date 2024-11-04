import { useState } from 'react';
import { Card, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const InputArea = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage('');
        }
    };

    return (
        <Card  sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            alignSelf:"center",
            padding: 1,
            m:1,
            width:"80%",
            bottom:30,
            borderTop: "1px solid #e0e0e0", 
            borderRadius:"15px",
            mb:5,
            mt:2
          }}>
            <TextField
                 fullWidth
                 variant="outlined"
                 sx={{
                     "& .MuiOutlinedInput-root": {
                         "& fieldset": {
                             border: "none",  
                         },
   
                     },
                 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send a message..."
            />
            <IconButton color="black" onClick={handleSend} >
                <SendIcon />
            </IconButton>
        </Card>
    );
}; 

export default InputArea;
