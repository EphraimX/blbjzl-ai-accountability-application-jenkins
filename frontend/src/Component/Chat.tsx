import React, { useState } from 'react';
// import Message from './Message';
import ChatInput from './ChatInput';
import './chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons';

interface IMessage {
  sender: 'user' | 'bot';
  content: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([
    { sender: 'bot', content: 'Hey there! I’m BLBJZL, your personal accountability partner AI. I’m here to keep you on track, motivated, and moving toward your goals—no judgment, just solid support. Ready to tackle your to-do list together? Let’s do this. What’s first on the agenda?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim()) {
      const newUserMessage: IMessage = { sender: 'user', content: input };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);

      try {
        const response = await fetch('https://blbjzl-accountability-application-backend.fly.dev/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_input: input }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const newBotMessage: IMessage = { sender: 'bot', content: data.reply };
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', content: 'Uh-oh, looks like the server’s not responding right now. No stress—we’ve got this. Give it another try, and if it still doesn’t work, we’ll troubleshoot it together. One step at a time!' }]);
      }

      setInput('');
    }
  };


  return (
    <div className="App">
      <div className="app-title">Sassiatrist</div>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === 'user' ? (
              <FontAwesomeIcon icon={faUser} className="icon" />
            ) : (
              <FontAwesomeIcon icon={faRobot} className="icon" />
            )}
            <div className="message-content">{message.content}</div>
          </div>
        ))}
      </div>
      <ChatInput value={input} onChange={(e) => setInput(e.target.value)} onSend={sendMessage} />
    </div>
  );
};

export default Chat;