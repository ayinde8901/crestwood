import "./ChatWidget.css";
import { useState } from "react";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const getBotReply = (text) => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes("admission")) {
      return "Admissions are currently open! Please visit the Admissions page for details.";
    }
    if (lowerText.includes("fee")) {
      return "For fee structure, kindly contact the school office or check the Admissions page.";
    }
    if (lowerText.includes("contact")) {
      return "You can reach us via the Contact page or call our school office.";
    }
    if (lowerText.includes("event")) {
      return "Our upcoming events are listed on the Events page. Please check it out!";
    }

    return "Thank you for your message. Our team will respond shortly.";
  };

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      sender: "user",
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // Simulate AI typing delay
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: getBotReply(message),
        sender: "bot",
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className={`chat-widget ${open ? "open" : ""}`}>
      <button className="chat-btn" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chat-box">
          <h4>School Assistant 🤖</h4>

          <div className="chat-messages">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`chat-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
