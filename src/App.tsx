import { useState } from 'react'
import './App.css'
import Groq from 'groq-sdk';
import Markdown from 'react-markdown';

interface Chat {
  userMessage: string;
  assistantReply: string;
}

function App() {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<Chat[]>([]);

  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const client = new Groq({
      apiKey: GROQ_API_KEY,
      dangerouslyAllowBrowser: true, // Only use this in development
    });
    console.log("Message sent:", message);

    try {
      const prompt = `You are a digital literacy assistant helping people learn about technology, digital skills, online safety, and computer basics. Respond helpfully to: ${message}`;
      
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama3-8b-8192',
      });

      const reply = chatCompletion.choices[0].message.content;
      if(reply){
        setChat((prevChat) => [...prevChat, { userMessage: message, assistantReply: reply }]);
        setMessage(""); 
      }

      console.log("Reply from Groq:", reply);
      
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }
  

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">💡</span>
            <h1>DigiMentor</h1>
          </div>
          <p className="tagline">Your Digital Literacy Companion</p>
        </div>
      </div>
      
      <div className="chat-messages">
        {chat.length === 0 && (
          <div className="welcome-message">
            <div className="welcome-content">
              <h2>Welcome to DigiMentor! 👋</h2>
              <p>I'm here to help you with:</p>
              <ul>
                <li>🖥️ Computer basics and navigation</li>
                <li>🌐 Internet safety and security</li>
                <li>📱 Using smartphones and apps</li>
                <li>📧 Email and communication tools</li>
                <li>🔒 Online privacy protection</li>
                <li>💼 Digital workplace skills</li>
              </ul>
              <p>Ask me anything about technology!</p>
            </div>
          </div>
        )}
        
        {chat.map((chatItem, index) => (
          <div key={index} className="chat-exchange">
            <div className="user-message">
              <div className="message-avatar">👤</div>
              <div className="message-content">
                <strong>You</strong>
                <p>{chatItem.userMessage}</p>
              </div>
            </div>
            <div className="assistant-message">
              <div className="message-avatar">💡</div>
              <div className="message-content">
                <strong>DigiMentor</strong>
                <div className="markdown-content">
                  <Markdown>{chatItem.assistantReply}</Markdown>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <div className="input-group">
          <input 
            type="text" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about computers, internet, apps, or digital skills..."
            className="message-input"
          />
          <button type="submit" className="send-button">
            <span>Send</span>
            <span className="send-icon">📤</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default App