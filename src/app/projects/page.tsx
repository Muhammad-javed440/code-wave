"use client";
import Image from "next/image";
import React, { useState } from "react";

const summaries = [
  {
    title: "AI Video Generator",
    heading: "Automated Content-to-Video Pipeline",
    content: `This Python-based app automates the creation of AI-generated videos through a full pipeline — from content generation to image and video synthesis. It features modular design for easy customization, auto-restart capability, and supports Urdu audio narration via gTTS.`,
    imageUrl: "/ai-video.png",
  },
  {
    title: "Whatsapp AI Agent",
    heading: "Automated WhatsApp Communications with AI",
    content: `Introducing CodeWaveAI, an intelligent WhatsApp AI Agent designed for business. It automates conversations, enhances customer engagement, and streamlines communication using Python, FastAPI, and leading AI models.
"Optimize your WhatsApp strategy with CodeWaveAI. Our AI agent integrates with Twilio to provide automated, smart responses, improving efficiency and user satisfaction. Explore the future of digital communication.`,
    imageUrl: "/whatsapp.png",
  },
  {
    title: "YouTube AI Agent",
    heading: "YouTube Auto Uploader App",
    content: ` This app is designed for **YouTube automation**. It eliminates the repetitive manual process of
 uploading videos, writing metadata, and scheduling them. With this system, you can set up a folder
 of videos and have them automatically uploaded to YouTube with AI-enhanced metadata at
 scheduled times every day
 `,
    imageUrl: "/youtube.png",
  },
  {
    title: "VPN APP",
    heading: " FastAPI VPN Proxy App ",
    content: ` The **FastAPI VPN Proxy App** serves as both a practical VPN-like solution and a learning project
 for developers interested in network privacy, proxy handling, and FastAPI integration. With its
 modular architecture and Tor support, it can be extended to include authentication, logging, or
 multi-proxy switching for advanced use cases.`,
    imageUrl: "/vpn.png",
  },
  {
    title: "Gmail AI Agent",
    heading: "Automated Gmail Communications with AI",
    content: `Introducing CodeWaveAI, an intelligent Gmail AI Agent designed for business. It automates conversations, enhances customer engagement, and streamlines communication using Python, FastAPI, and leading AI models.
"Optimize your Gmail strategy with CodeWaveAI. Our AI agent integrates with Twilio to provide automated, smart responses, improving efficiency and user satisfaction. Explore the future of digital communication.`,
    imageUrl: "/whatsapp.png",
  },
  {
    title: "AI Chatbot",
    heading: "AI Voice chatbot Website in nextjs",
    content: ` This document provides an overview and usage guide for the Chatbot Application. The app consists
 of a FastAPI backend and a Next.js frontend chatbot interface. It integrates Google Gemini (via the
 OpenAI-compatible API) to act as a professional call support agent an increasingly digital world, cybersecurity has become a critical concern...`,
    imageUrl: "/chatbot.png",
  },
  {
    title: "Crawling App",
    heading: "Crawling & Data Storage to Google Sheet",
    content: ` The app crawls the requested website, processes the content into cleaned markdown, and then
 saves it to the Google Spreadsheet under two columns URL and Content`,
    imageUrl: "/crawling1.png",
  },
  {
    title: "Multi AI Agent Workflow",
    heading: "Multi AI Agent Translation Workflow",
    content: `In this workflow, the first agent translates the input text into the target language. The second agent then reviews the translated text to correct any grammatical or structural mistakes. Finally, the third agent performs proofreading to ensure the translation is polished, natural, and ready for final use.`,
    imageUrl: "/translation1.png",
  },
  {
    title: "IDM",
    heading: "Internet Download Manager in Python",
    content: `I built an IDM in python which which download video from Tiktok, YouTube and other chinese channel. `,
    imageUrl: "/5GTechnology.jpg",
  },
  {
    title: "Try Room",
    heading: "Fashion Try-On AI Application",
    content: ` This application is a fashion try-on AI system built with FastAPI (backend) and Streamlit (frontend).
 It allows users to provide personal details, upload their picture, and generate a try-on preview
 image using AI agents`,
    imageUrl: "/reality.jpg",
  },

];

const Page = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {summaries.map((item, index) => (
        <div key={index} className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="sm:h-56 md:h-72 lg:h-96 w-full object-cover object-center"
              src={item.imageUrl}
              alt={item.title}
              width={740}
              height={480}
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {item.title}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {item.heading}
              </h1>
              <p
                className={`leading-relaxed mb-3 transition-all duration-300 ${
                  expandedIndex === index ? "" : "line-clamp-2"
                }`}
              >
                {item.content}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-indigo-500 hover:underline text-sm mb-4"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Page;
