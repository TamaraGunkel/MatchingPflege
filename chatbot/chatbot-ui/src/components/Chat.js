

import React from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const Chat = () =>{

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#5A61AE',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#5A61AE',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    const parseMessage = (previous) =>{
        fetch('http://example.com/movies.json')
            .then(response => response.json())
            .then(data => console.log(data));
        return "Test" + previous;
    }

    return(
        <ThemeProvider theme={theme}>
            <ChatBot
                steps = {[
                    {
                        id: 'computer-response',
                        message: parseMessage("{previousValue}"),
                        trigger: 'user-input',
                    },
                    {
                        id: 'user-input',
                        user: true,
                        trigger: 'computer-response'

                    }]}
            />
        </ThemeProvider>
    );
}

export default Chat