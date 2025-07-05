"use client";
import { useState } from "react";
import { sendToAgent } from "../api/chatAgent";

export default function ChatAgent() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const reply = await sendToAgent(input);
    setResponse(reply);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-4 py-2 w-full"
        placeholder="Ask something..."
      />
      <button
        onClick={handleSend}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
      {response && <p className="mt-4">{response}</p>}
    </div>
  );
}
