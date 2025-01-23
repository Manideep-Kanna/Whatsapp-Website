import React, { useState } from 'react';
import { MoreVertical, Phone, Video, Search, Smile, Paperclip, Mic, Send } from 'lucide-react';

interface ChatAreaProps {
  selectedChat: string | null;
}

const mockMessages = [
  { id: 1, text: "Hey, how are you?", sent: true, time: "10:30 AM" },
  { id: 2, text: "I'm good, thanks! How about you?", sent: false, time: "10:31 AM" },
  { id: 3, text: "Pretty good! Working on some new projects.", sent: true, time: "10:32 AM" },
  { id: 4, text: "That sounds interesting! What kind of projects?", sent: false, time: "10:33 AM" },
];

const ChatArea: React.FC<ChatAreaProps> = ({ selectedChat }) => {
  const [message, setMessage] = useState('');

  if (!selectedChat) {
    return (
      <div className="flex-1 bg-[#222e35] flex items-center justify-center">
        <div className="text-center text-[#aebac1]">
          <h2 className="text-3xl font-light mb-4">WhatsApp Web</h2>
          <p>Send and receive messages without keeping your phone online.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-[#0b141a]">
      {/* Chat header */}
      <div className="h-16 bg-[#202c33] flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop"
            alt="Chat avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-white font-medium">John Doe</h3>
            <span className="text-sm text-[#aebac1]">online</span>
          </div>
        </div>
        <div className="flex gap-6 text-[#aebac1]">
          <button><Video size={24} /></button>
          <button><Phone size={24} /></button>
          <button><Search size={24} /></button>
          <button><MoreVertical size={24} /></button>
        </div>
      </div>

      {/* Messages area */}
      <div 
        className="flex-1 overflow-y-auto p-8"
        style={{
          backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
          backgroundSize: '400px'
        }}
      >
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex mb-4 ${msg.sent ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[60%] rounded-lg px-4 py-2 ${
                msg.sent ? 'bg-[#005c4b]' : 'bg-[#202c33]'
              }`}
            >
              <p className="text-white">{msg.text}</p>
              <span className="text-xs text-[#aebac1] float-right ml-2 mt-1">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="h-16 bg-[#202c33] flex items-center px-4 gap-4">
        <button className="text-[#aebac1]"><Smile size={24} /></button>
        <button className="text-[#aebac1]"><Paperclip size={24} /></button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 bg-[#2a3942] text-white rounded-lg px-4 py-2 focus:outline-none"
        />
        <button className="text-[#aebac1]">
          {message ? <Send size={24} /> : <Mic size={24} />}
        </button>
      </div>
    </div>
  );
};

export default ChatArea;