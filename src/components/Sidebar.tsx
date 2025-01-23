import React from 'react';
import { Menu, Search, MoreVertical, Archive } from 'lucide-react';

interface SidebarProps {
  onChatSelect: (chatId: string) => void;
  selectedChat: string | null;
}

const mockChats = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '10:30 AM',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    unread: 2,
  },
  {
    id: '2',
    name: 'Alice Smith',
    lastMessage: 'Meeting at 3 PM',
    time: '9:45 AM',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    unread: 0,
  },
  {
    id: '3',
    name: 'Work Group',
    lastMessage: 'Bob: The project is ready',
    time: 'Yesterday',
    avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=100&h=100&fit=crop',
    unread: 5,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ onChatSelect, selectedChat }) => {
  return (
    <div className="w-[400px] flex-shrink-0 border-r border-gray-700">
      {/* Header */}
      <div className="h-16 bg-[#202c33] flex items-center justify-between px-4">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex gap-6 text-[#aebac1]">
          <button><Menu size={24} /></button>
          <button><MoreVertical size={24} /></button>
        </div>
      </div>

      {/* Search */}
      <div className="p-2">
        <div className="bg-[#202c33] flex items-center gap-4 px-4 py-1 rounded-lg">
          <Search size={20} className="text-[#aebac1]" />
          <input
            type="text"
            placeholder="Search or start new chat"
            className="bg-transparent text-white w-full py-2 focus:outline-none"
          />
        </div>
      </div>

      {/* Archived */}
      <button className="w-full flex items-center gap-4 px-4 py-3 text-[#aebac1] hover:bg-[#202c33]">
        <Archive size={20} />
        <span>Archived</span>
      </button>

      {/* Chat list */}
      <div className="overflow-y-auto">
        {mockChats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onChatSelect(chat.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 hover:bg-[#202c33] ${
              selectedChat === chat.id ? 'bg-[#2a3942]' : ''
            }`}
          >
            <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full" />
            <div className="flex-1 flex flex-col items-start">
              <div className="flex justify-between w-full">
                <span className="text-white font-medium">{chat.name}</span>
                <span className="text-xs text-[#aebac1]">{chat.time}</span>
              </div>
              <span className="text-sm text-[#aebac1] text-left">{chat.lastMessage}</span>
            </div>
            {chat.unread > 0 && (
              <span className="bg-[#00a884] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {chat.unread}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;