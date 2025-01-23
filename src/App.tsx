import React, { useState } from 'react';
import { Menu, Search, MoreVertical, Phone, Video, Smile, Paperclip, Mic, Send } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';

function App() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className="h-screen bg-[#111b21] flex">
      {/* Main container */}
      <div className="flex w-full h-full max-w-[1600px] mx-auto shadow-xl">
        <Sidebar onChatSelect={setSelectedChat} selectedChat={selectedChat} />
        <ChatArea selectedChat={selectedChat} />
      </div>
    </div>
  );
}

export default App;