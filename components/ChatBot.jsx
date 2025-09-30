"use client";
import { useState } from "react";
import { Bot, Send, X } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const messages = [
    { from: "bot", text: "👋 Hi! I’m your assistant. How can I help you today?" },
    { from: "user", text: "Tell me about your services." },
    { from: "bot", text: "We provide AI, Blockchain, AR/VR, and Digital Transformation solutions." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-5 py-3 text-white shadow-lg hover:opacity-90"
        >
          <Bot className="h-5 w-5" />
          Chat
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-3">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-xl max-w-[70%] shadow-sm ${
                    msg.from === "user"
                      ? "bg-gradient-to-r from-orange-400 to-pink-400 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setInput("");
            }}
            className="flex items-center gap-2 p-3 border-t bg-white"
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 p-2 text-white shadow hover:opacity-90"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
