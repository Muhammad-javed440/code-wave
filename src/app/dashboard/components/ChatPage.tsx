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
        const reply = await sendToAgent(input);
        setResponse((prev) => [...prev, { id: Date.now().toString(), content: input, isUser: true, timestamp: new Date() }, reply]);
    };


    console.log("Response in ChatPage:", input);
    console.log("Response in ChatPage:", response);
    return (
        <div className="flex flex-col h-full max-w-2xl mx-auto bg-white">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
                <h1 className="text-xl font-semibold text-gray-900">New Subject</h1>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-scroll space-y-4 !h-[500px]">
                {response.map((message, idx) => (
                    <div key={idx} className={`flex ${message.isUser ? "justify-start" : "justify-end"}`}>
                        <div
                            className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${message.isUser ? "bg-gray-100 text-gray-900" : "bg-teal-400 text-white"
                                }`}
                        >
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <ReactMarkdown >
                                {typeof message === "string" ? message : ""}
                            </ReactMarkdown>
                            {/* <p className="text-sm leading-relaxed">{typeof message === "string" ? message : ""}</p> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-gray-200">
                <div className="space-y-4">
                    {/* Message Input */}
                    <div className="relative">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            // onKeyPress={handleKeyPress}
                            placeholder="Message"
                            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={4}
                        />
                    </div>

                    {/* Attachment Section */}
                    <div className="space-y-2">
                        {/* <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Attachment</span>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                                <Paperclip className="w-5 h-5" />
                            </button>
                        </div> */}

                        {/* <input ref={fileInputRef} type="file" multiple onChange={handleFileAttachment} className="hidden" /> */}

                        {/* Display attached files
                        {attachedFiles.length > 0 && (
                            <div className="space-y-2">
                                {attachedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                        <span className="text-sm text-gray-700 truncate">{file.name}</span>
                                        <button onClick={() => removeAttachment(index)} className="text-red-500 hover:text-red-700 text-sm">
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )} */}
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSend}
                        // disabled={!newMessage.trim() && attachedFiles.length === 0}
                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
