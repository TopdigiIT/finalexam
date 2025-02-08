import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [message, setMessage] = useState("");

  const adminPhoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your actual WhatsApp number

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setShowTooltip(false);
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`, "_blank");
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Tooltip Balloon */}
      {showTooltip && (
        <div className="mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-md animate-bounce">
          We are available for chat
        </div>
      )}

      {/* Floating WhatsApp Chat Window */}
      {isChatOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg fixed bottom-16 right-5 border border-gray-300 flex flex-col">
          {/* Chat Header */}
          <div className="bg-green-500 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
            <span>Chat with Admin</span>
            <FaTimes className="cursor-pointer" onClick={() => setIsChatOpen(false)} />
          </div>

          {/* Chat Messages Area (Empty for Now) */}
          <div className="flex-1 p-4 overflow-auto text-gray-600 text-2xl">
            Type your message below and send it to WhatsApp.
          </div>

          {/* Message Input Section */}
          <div className="p-2 border-t flex items-center gap-2 bg-gray-100">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg outline-none"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <button
        onClick={toggleChat}
        className="flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={30} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
