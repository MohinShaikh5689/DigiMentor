import { useState } from 'react'
import Groq from 'groq-sdk';
import Markdown from 'react-markdown';

interface Chat {
  userMessage: string;
  assistantReply: string;
}

interface ChatBotProps {
  onClose: () => void;
}

const ChatBot = ({ onClose }: ChatBotProps) => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<Chat[]>([]);

  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const client = new Groq({
      apiKey: GROQ_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    try {
      let prompt;
      if (chat.length < 1) {
        prompt = `You are DigiMentor, a friendly AI assistant helping people with digital literacy questions and promoting our courses. Be helpful, encouraging, and occasionally mention our courses when relevant. Respond to: ${message}`;
      } else {
        prompt = `You are DigiMentor, a friendly AI assistant helping people with digital literacy questions and promoting our courses. Respond to: ${message} and consider the previous conversation context: ${chat.slice(0,10).map(item => `User: ${item.userMessage} Assistant: ${item.assistantReply}`).join(' ')}`;
      }
      
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama3-8b-8192',
      });

      const reply = chatCompletion.choices[0].message.content;
      if (reply) {
        setChat((prevChat) => [...prevChat, { userMessage: message, assistantReply: reply }]);
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-title">
          <span className="chatbot-icon">💡</span>
          <h3>DigiMentor</h3>
        </div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="chatbot-messages">
        {chat.length === 0 && (
          <div className="chatbot-welcome">
            <h4>Hi! I'm DigiMentor 👋</h4>
            <p>Ask me about our courses, digital skills, or any tech questions!</p>
          </div>
        )}

        {chat.map((chatItem, index) => (
          <div key={index} className="chat-exchange">
            <div className="user-message">
              <div className="message-content">
                <p>{chatItem.userMessage}</p>
              </div>
            </div>
            <div className="assistant-message">
              <div className="message-content">
                <Markdown>{chatItem.assistantReply}</Markdown>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chatbot-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything about digital skills..."
          className="chatbot-input"
        />
        <button type="submit" className="chatbot-send">📤</button>
      </form>
    </div>
  )
}

export default ChatBot