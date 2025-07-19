import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa'; // Import robot icon

const CustomChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you?' }
  ]);
  const [input, setInput] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { from: 'user', text: input }]);

    setTimeout(() => {
      const botReply = generateBotResponse(input);
      setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
    }, 500);

    setInput('');
  };

  const generateBotResponse = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes('ai') || text.includes('ml')) {
      return 'We offer AI/ML services like Computer Vision, NLP, and Predictive Analytics.';
    }

    if (text.includes('contact')) {
      return 'You can contact us at webthrive4@gmail.com or call +91-XXXXXXXXXX.';
    }

    if (text.includes('services')) {
      return (
        'Our services include:\n' +
        '- AI/ML Development\n' +
        '- Web Development\n' +
        '- Chatbot Development\n' +
        '- Data Analytics\n' +
        '- Computer Vision Projects\n' +
        '- Cloud Integration'
      );
    }

    if (text.includes('projects') || text.includes('portfolio')) {
      return (
        'Our recent projects:\n' +
        '- Stereo Assisted Intravenous Therapy\n' +
        '- Open Set Facial Expression Recognition\n' +
        '- Biometric Cattle Identification\n' +
        '- Wellness Booking Platform\n' +
        '- Food Delivery App UI'
      );
    }

    if (text.includes('pricing') || text.includes('cost')) {
      return 'Our pricing is project-based. Contact us for a custom quote.';
    }

    if (text.includes('location') || text.includes('address')) {
      return 'We are located in Hyderabad, India. We also serve clients globally.';
    }

    if (text.includes('team') || text.includes('who are you')) {
      return 'We are a startup specializing in AI, ML, and software development services.';
    }

    if (text.includes('time') || text.includes('how long')) {
      return 'Project timelines vary, but small projects take 2-4 weeks and larger ones 2-3 months.';
    }

    if (text.includes('support') || text.includes('help')) {
      return 'We offer 24/7 support via email and WhatsApp for all our clients.';
    }

    if (text.includes('thank')) {
      return 'You’re welcome! Let us know if you have more questions.';
    }

    return 'Sorry, I didn’t understand that. You can ask about services, projects, contact, or support.';
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={handleToggle}
        className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-600 transition flex items-center space-x-2"
      >
        <FaRobot />
        <span>{isOpen ? 'Close Chat' : 'Chat with us'}</span>
      </button>

      {isOpen && (
        <div className="bg-white w-72 h-96 p-4 rounded-lg shadow-xl flex flex-col mt-3">
          <div className="flex-1 overflow-y-auto mb-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 ${msg.from === 'bot' ? 'text-left' : 'text-right'}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.from === 'bot' ? 'bg-gray-200 text-black' : 'bg-indigo-500 text-white'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg px-3 py-2 outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomChatBot;
