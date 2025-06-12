import { useState } from 'react'
import './App.css'
import LandingPage from './components/landingPage';
import ChatBot from './components/chatbot';
import { Footer } from './components/footer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="app">
      <LandingPage />
      <Footer />
      
      {/* Chat Toggle Button */}
      <button 
        className="chat-toggle-btn"
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label="Toggle DigiMentor Chat"
      >
        💡
      </button>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="chat-popup">
          <ChatBot onClose={() => setIsChatOpen(false)} />
        </div>
      )}
    </div>
  )
}

export default App