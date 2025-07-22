"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, Send, StopCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { motion, AnimatePresence } from "framer-motion";
import { sendToAgent } from "@/app/api/chatAgent";

type SpeechRecognition = any;
type SpeechRecognitionEvent = any;

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    if (editingMessageId) {
      // Update edited user message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === editingMessageId ? { ...msg, content: input } : msg
        )
      );
      setEditingMessageId(null);
      setInput("");
      return;
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const response = await sendToAgent(input);

    const botMessage: Message = {
      id: crypto.randomUUID(),
      content: response,
      isUser: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
    speak(response);
  };

  const startVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setIsRecording(true);
  };

  const stopVoiceInput = () => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  };

  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      <header className="p-4 text-center border-b border-gray-300 dark:border-gray-700 shadow-sm bg-white/80 dark:bg-gray-900/60 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          💬 AI Chat Assistant
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">powered by GPT</p>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4 max-w-3xl w-full mx-auto">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 items-start ${
                msg.isUser ? "justify-end" : "justify-start"
              }`}
            >
              {!msg.isUser && (
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                  🤖
                </div>
              )}
              {msg.isUser && (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-800">
                  👤
                </div>
              )}

              <div
                className={`max-w-[75%] px-4 py-2 rounded-xl text-sm md:text-base whitespace-pre-wrap shadow-sm relative ${
                  msg.isUser
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                }`}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {msg.content}
                </ReactMarkdown>
                <div className="text-xs mt-1 text-right text-gray-200 dark:text-gray-400">
                  {msg.timestamp.toLocaleTimeString()}
                </div>

                {msg.isUser && (
                  <button
                    onClick={() => {
                      setInput(msg.content);
                      setEditingMessageId(msg.id);
                    }}
                    className="absolute top-1 right-2 text-xs text-white/80 hover:text-white underline"
                    title="Edit"
                  >
                    Edit
                  </button>
                )}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
            >
              <span className="text-lg">🤖</span>
              <span className="italic">Typing...</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </main>

      <footer className="w-full max-w-3xl mx-auto px-4 py-3 flex flex-col gap-2 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
        {editingMessageId && (
          <p className="text-sm text-blue-600">Editing your message...</p>
        )}

        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-md"
          >
            <Send className="h-5 w-5" />
          </button>
          <button
            onClick={isRecording ? stopVoiceInput : startVoiceInput}
            className={`p-2 rounded-full ${
              isRecording ? "bg-red-500" : "bg-green-500"
            } hover:opacity-80 text-white shadow-md`}
          >
            {isRecording ? <StopCircle className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>
        </div>
      </footer>
    </div>
  );
}
