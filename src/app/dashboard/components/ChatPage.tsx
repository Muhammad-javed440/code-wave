"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mic,
  Send,
  StopCircle,
  Copy,
  Edit,
  Download,
  Trash,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { motion, AnimatePresence } from "framer-motion";
import { sendToAgent } from "@/app/api/chatAgent";
import jsPDF from "jspdf";

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
  const [isDark, setIsDark] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleSend = async () => {
    if (!input.trim()) return;

    if (editingMessageId) {
      const updatedMessages = messages.map((msg) =>
        msg.id === editingMessageId
          ? { ...msg, content: input, timestamp: new Date() }
          : msg
      );

      const nextBotIndex = messages.findIndex((m) => m.id === editingMessageId) + 1;
      const updated =
        nextBotIndex < messages.length && !messages[nextBotIndex].isUser
          ? updatedMessages.filter((_, i) => i !== nextBotIndex)
          : updatedMessages;

      setMessages(updated);
      setEditingMessageId(null);
      setInput("");
      setIsTyping(true);

      const res = await sendToAgent(input);
      const newBotMsg: Message = {
        id: crypto.randomUUID(),
        content: res,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
      speak(res);
      return;
    }

    const userMsg: Message = {
      id: crypto.randomUUID(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const res = await sendToAgent(input);
    const botMsg: Message = {
      id: crypto.randomUUID(),
      content: res,
      isUser: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
    speak(res);
  };

  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
  };

  const startVoice = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onresult = (e: SpeechRecognitionEvent) =>
      setInput(e.results[0][0].transcript);
    recognition.onerror = (e: any) => console.error("Error", e);
    recognition.onend = () => setIsRecording(false);
    recognition.start();
    recognitionRef.current = recognition;
    setIsRecording(true);
  };

  const stopVoice = () => recognitionRef.current?.stop();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => alert("Copied!"));
  };

  const handleDownload = (text: string) => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat-output.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDeleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const handleClearChat = () => {
    if (confirm("Are you sure you want to clear the chat?")) {
      setMessages([]);
    }
  };

  const exportAsMarkdown = () => {
    const md = messages
      .map((msg) => `${msg.isUser ? "**User:**" : "**AI:**"}\n${msg.content}`)
      .join("\n\n---\n\n");
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat-history.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportAsPDF = () => {
    const doc = new jsPDF();
    let y = 10;

    messages.forEach((msg, index) => {
      const role = msg.isUser ? "User" : "AI";
      const lines = doc.splitTextToSize(`${role}: ${msg.content}`, 180);
      doc.text(lines, 10, y);
      y += lines.length * 10 + 10;

      if (y > 280 && index !== messages.length - 1) {
        doc.addPage();
        y = 10;
      }
    });

    doc.save("chat-history.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      <header className="relative p-4 text-center border-b bg-white dark:bg-gray-900 shadow flex-shrink-0">
        <h1 className="text-xl sm:text-2xl font-bold">💬 AI Chat Assistant</h1>
        <p className="text-xs sm:text-sm text-gray-500">Powered by GPT</p>
        <button
          onClick={() => setIsDark(!isDark)}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 text-xs sm:text-sm"
        >
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-4 max-w-3xl w-full mx-auto">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-2 items-start ${
                msg.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs sm:text-base">
                {msg.isUser ? "👤" : "🤖"}
              </div>

              <div
                className={`relative max-w-[85%] sm:max-w-[80%] md:max-w-[70%] p-2 sm:p-3 rounded-xl shadow text-sm whitespace-pre-wrap break-words ${
                  msg.isUser
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                }`}
              >
                <div className="prose dark:prose-invert prose-sm max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>

                <div className="flex justify-end gap-2 mt-2 text-xs">
                  <button onClick={() => handleCopy(msg.content)} title="Copy">
                    <Copy className="w-4 h-4" />
                  </button>
                  {!msg.isUser && (
                    <>
                      <button onClick={() => handleDownload(msg.content)} title="Download">
                        <Download className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteMessage(msg.id)} title="Delete">
                        <Trash className="w-4 h-4 text-red-500" />
                      </button>
                    </>
                  )}
                  {msg.isUser && (
                    <>
                      <button
                        onClick={() => {
                          setInput(msg.content);
                          setEditingMessageId(msg.id);
                        }}
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteMessage(msg.id)} title="Delete">
                        <Trash className="w-4 h-4 text-red-500" />
                      </button>
                    </>
                  )}
                </div>

                <div className="text-right text-gray-400 text-[10px] mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 italic flex items-center gap-2"
            >
              <span>🤖</span>
              <span>Typing...</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </main>

      <footer className="w-full max-w-3xl mx-auto px-2 sm:px-4 py-3 flex flex-col gap-2 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 flex-shrink-0">
        {editingMessageId && (
          <p className="text-sm text-blue-600">Editing your message...</p>
        )}
        <div className="flex flex-wrap gap-2 justify-end text-sm text-blue-600">
          <button onClick={exportAsMarkdown} className="hover:underline">
            ⬇️ Export Markdown
          </button>
          <button onClick={exportAsPDF} className="hover:underline">
            📄 Export PDF
          </button>
          <button onClick={handleClearChat} className="text-red-500 hover:underline">
            🗑️ Clear Chat
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white text-sm"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-md"
          >
            <Send className="h-5 w-5" />
          </button>
          <button
            onClick={isRecording ? stopVoice : startVoice}
            className={`p-2 rounded-full ${
              isRecording ? "bg-red-500" : "bg-green-500"
            } text-white shadow-md`}
          >
            {isRecording ? <StopCircle className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>
        </div>
      </footer>
    </div>
  );
}
