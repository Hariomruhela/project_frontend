import React, { useRef, useState } from "react";
import { FaPaperclip,  FaSmile } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
const faqDatabase = [
  {
    intent: "greeting",
    keywords: ["hi", "hello", "hey"],
    response: "Hello 👋 Welcome! How can I assist you today?"
  },
  {
    intent: "services",
    keywords: ["services", "offer", "provide"],
    response:
      "We provide AI Automation, E-commerce Solutions, and Cloud Services."
  },
  {
    intent: "pricing",
    keywords: ["price", "cost", "pricing"],
    response:
      "Pricing depends on your requirements. Would you like to share more details?"
  },
  {
    intent: "contact",
    keywords: ["contact", "email", "call"],
    response:
      "You can contact us via our contact form or email us at hello@yourdomain.com."
  }
];

function detectIntent(message) {
  const lowerMsg = message.toLowerCase();

  for (let item of faqDatabase) {
    for (let keyword of item.keywords) {
      if (lowerMsg.includes(keyword)) {
        return item.response;
      }
    }
  }

  return "I'm not sure I understand. Could you please rephrase?";
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
   const [showEmoji, setShowEmoji] = useState(false);
     const fileInputRef = useRef();


  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: detectIntent(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

// 📎 File Upload Handler
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);

    const fileMessage = {
      sender: "user",
      file: file,
      fileURL: fileURL
    };

    setMessages((prev) => [...prev, fileMessage]);
  };
   const onEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
    setShowEmoji(false);
  };

  return (
    <>
      {/* 🔘 Toggle Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-9 right-6 w-14 h-14 flex items-center justify-center
        rounded-full bg-purple-600 text-white text-2xl cursor-pointer
        shadow-lg hover:scale-110 transition z-50"
      >
        <img src="/TQwhite.png" alt="tQwhite" className="w-32 h-32 pt-3 object-cover"/>
      </div>

      {/* 💬 Chat Window */}
      {isOpen ? (
        <div
          className="fixed bottom-24 right-6 w-[420px] h-[420px]
          backdrop-blur-xl bg-white/10 border border-white/20
          rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/10 border-b border-white/20">
          <div className="flex">
            <img src="/TQ_logo.png" alt="chatbot_hearder_logo"
            className="w-7 h-7 "/>
            <span className="flex pt-1 pl-1 font-semibold text-white">Hi I'm Quito - Your AI Assistant</span>
          </div>
      
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-400"
            >
              ✕
            </button>
          </div>

         {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, index) => (
              <div key={index}>
                {msg.text && (
                  <div
                    className={`max-w-[70%] px-3 py-2 rounded-xl ${
                      msg.sender === "user"
                        ? "ml-auto bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] text-white"
                        : "mr-auto bg-white text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                )}

                {msg.file && (
                  <div className="ml-auto bg-white p-2 rounded-lg max-w-[70%]">
                    {msg.file.type.startsWith("image") ? (
                      <img
                        src={msg.fileURL}
                        alt="uploaded"
                        className="rounded-lg max-h-40"
                      />
                    ) : (
                      <a
                        href={msg.fileURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        📎 {msg.file.name}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

            {/* Emoji Picker */}
         {showEmoji && (
  <div className="absolute bottom-16 right-2 z-50">
    <EmojiPicker
      onEmojiClick={onEmojiClick}
      height={350}
      width={280}
      theme="dark"
    />
  </div>
)}


          {/* Input */}
          <div className="p-2 border-t border-white/20 flex gap-2">
          {/* File Upload */}
            <button
              onClick={() => fileInputRef.current.click()}
              className="text-white text-lg"
            >
              <FaPaperclip />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              hidden
            />
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-white/10 text-white placeholder-white/60
              px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400"
            />
             <button
              onClick={() => setShowEmoji(!showEmoji)}
              className="text-white text-lg"
            >
              <FaSmile />
            </button>
            <button
              onClick={handleSend}
              className="bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] hover:bg-cyan-600 text-white px-4 rounded-lg transition"
            >
              <IoSendSharp />
            </button>
          </div>
           
          
          <span className="text-white/60 text-center pt-2">prowerd by Techquitoes</span>
        </div>

      ):<div className="fixed bottom-9   right-16  rounded-lg bg-white px-5 py-2 ">
        <span className="tect-black  font-sm" >Chat with Us <span className="text-3xl pt-3"> 👋</span></span>
      </div>}
      
    </>
  );
}
  