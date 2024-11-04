import { Box } from '@mui/material';
import Message from './Messages';

//to show each messages
const ChatArea = ({ messages }) => {
    return (
        <Box sx={{ mardin:10,padding: 2, flexGrow: 1, overflowY: 'auto' }}>
            {messages.map((msg, index) => (
                <Message key={index} sender={msg.sender} text={msg.text} />
            ))}
        </Box>
    );
};

export default ChatArea;
