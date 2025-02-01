import React, { useState, useEffect } from 'react';

interface Message {
  id: string;
  sender: string;
  receiver: string;
  content: string;
  timestamp: Date;
}

const ChatMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  // In a real app, you'd fetch messages from your backend
  useEffect(() => {
    // Simulated messages for demonstration
    const demoMessages = [
      {
        id: '1',
        sender: 'owner',
        receiver: 'renter',
        content: 'Hello! When would you like to pick up the item?',
        timestamp: new Date(),
      },
      // Add more demo messages as needed
    ];
    setMessages(demoMessages);
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: 'renter', // This should be dynamic based on logged-in user
      receiver: 'owner',
      content: newMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="chat-container p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <div className="messages-list h-96 overflow-y-auto mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message p-2 mb-2 rounded ${
              message.sender === 'renter' 
                ? 'bg-blue-100 ml-auto' 
                : 'bg-gray-100'
            }`}
          >
            <p>{message.content}</p>
            <small className="text-gray-500">
              {message.timestamp.toLocaleTimeString()}
            </small>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatMessages; 