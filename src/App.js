import { useEffect, useState } from 'react';
import Header from './components/Header';
import axios from 'axios';
import { Box } from '@mui/material';
import InputArea from './components/InputArea';
import ChatArea from './components/ChatArea';

const App = () => {
    const [messages, setMessages] = useState([
        { sender: 'ai', text: 'Hello! How can I assist you today?' }
    ]);

    useEffect(() => {
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
   

    const handleSendMessage = async (text) => {
       
        setMessages((prev) => [...prev, { sender: 'user', text }]);
      if (text){
        try {
            const response = await axios.post(`http://127.0.0.1:8000/sendmessage?question=${text}`,
              {
                headers: {
                    "Content-Type": "application/json",
                  },
            });
            setMessages((prev) => [...prev, { sender: 'ai', text: response.data }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }}
    };

    return (
        <Box   sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <ChatArea messages={messages} />
            <InputArea onSend={handleSendMessage} />
        </Box>
    );
};

export default App;
