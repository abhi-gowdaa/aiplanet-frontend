import { useEffect, useState } from 'react';
import Header from './components/Header';
import axios from 'axios';
import { Box } from '@mui/material';
import InputArea from './components/InputArea';
import ChatArea from './components/ChatArea';

const App = () => {
    // State to store chat messages, starting with a welcome message from AI
    const [messages, setMessages] = useState([
        { sender: 'ai', text: 'Hello! How can I assist you today?' }
    ]);

    useEffect(() => {
        // Function to fetch initial data when app loads
        const fetchData = async () => {
            try {
                await axios.get('http://127.0.0.1:8000/');  
                console.log("GET request"); 
            } catch (error) {
                console.error("Error during GET request:", error);  
            }
        };

        fetchData(); 
    }, []);
   
    // Function to handle sending user message
    const handleSendMessage = async (text) => {
        setMessages((prev) => [...prev, { sender: 'user', text }]); // Add user message to messages

        if (text) {
            try {
                // Sending user message to server with POST request
                const response = await axios.post(`http://127.0.0.1:8000/sendmessage?question=${text}`,
                  {
                    headers: {
                        "Content-Type": "application/json",  
                    },
                });
                // Adding AI response to messages
                setMessages((prev) => [...prev, { sender: 'ai', text: response.data }]);
            } catch (error) {
                console.error('Error sending message:', error);  
            }
        }
    };

    return (
        
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />  
            <ChatArea messages={messages} />  
            <InputArea onSend={handleSendMessage} />  
        </Box>
    );
};

export default App;
