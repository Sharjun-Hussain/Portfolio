"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AIContact = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm your virtual assistant. What would you like to discuss?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    // User message
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! I'll connect you with a human representative.",
          sender: "bot",
        },
      ]);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-gray-900 rounded-xl p-6 h-[500px] flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};
