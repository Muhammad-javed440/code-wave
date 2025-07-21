"use client"

import { sendToAgent } from "@/app/api/chatAgent"
import { Send } from "lucide-react"
import { useState } from "react"
import ReactMarkdown from "react-markdown"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<Message[]>([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setResponse((prev) => [...prev, userMessage]);

    const reply = await sendToAgent(input);
    setResponse((prev) => [...prev, reply]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white border rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Chat Assistant</h1>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {response.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-sm md:max-w-md p-4 rounded-2xl shadow-md ${
                message.isUser
                  ? "bg-white text-gray-800 border border-gray-300"
                  : "bg-blue-500 text-white"
              }`}
            >
              {message.isUser ? (
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              ) : (
                <ReactMarkdown className="prose prose-invert prose-sm whitespace-pre-wrap">
                  {message.content}
                </ReactMarkdown>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="p-6 border-t border-gray-200 bg-white">
        <div className="flex flex-col gap-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSend}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
