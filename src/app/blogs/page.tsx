"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
const summaries = [
  {
    title: "Agentic AI",
    heading: "What Is Agentic AI? The Rise of Intelligent, Goal-Oriented Machines",
    content: `Agentic AI refers to artificial intelligence systems that exhibit goal-directed behavior...`,
    imageUrl: "/ai1.jpeg",
  },
  {
    title: "Social Media",
    heading: "The Power of Social Media in the Digital Age",
    content: `In today's digital age, social media has become an integral part of our lives...`,
    imageUrl:"/social.webp",
  },
  {
    title: "Video Editing",
    heading: "🎬 The Art of Video Editing: A Beginner’s Guide",
    content: `Video editing is the process of manipulating and rearranging video footage...`,
    imageUrl: "/ai.jpg",
  },
  {
    title: "AI in Healthcare",
    heading: "Transforming Healthcare with AI: Innovations and Challenges",
    content: `Artificial Intelligence (AI) is revolutionizing the healthcare industry...`,
    imageUrl: "/health.jpeg"
  },
  {
    title: "Sustainable Tech",
    heading: "Sustainable Technology: Innovations for a Greener Future",
    content: `Sustainable technology refers to innovations that aim to reduce environmental impact...`,
    imageUrl: "/5GTechnology.jpg"
  },
  {
    title: "Cybersecurity",
    heading: "Cybersecurity in the Digital Age: Protecting Your Data",
    content: `In an increasingly digital world, cybersecurity has become a critical concern...`,
    imageUrl: "/cyber.webp"
  },  
  {
    title: "Blockchain",
    heading: "Understanding Blockchain Technology: A Comprehensive Guide",
    content: `Blockchain technology is a decentralized digital ledger that records transactions across many computers...`,
    imageUrl: "/blockchain.jpeg"
  },
  {
    title: "Cloud Computing",
    heading: "The Future of Cloud Computing: Trends and Innovations",
    content: `Cloud computing has transformed the way businesses operate, offering scalable resources and flexibility...`,
    imageUrl: "/future.jpg"
  },
  {
    title: "Augmented Reality",
    heading: "Exploring Augmented Reality: Applications and Future Prospects",
    content: `Augmented Reality (AR) overlays digital information onto the real world, enhancing user experiences...`,
    imageUrl: "/reality.jpg"
  },
  {
    title: "Quantum Computing",
    heading: "Quantum Computing: The Next Frontier in Technology",
    content: `Quantum computing harnesses the principles of quantum mechanics to process information...`,
    imageUrl: "/QuantumComputing.jpeg"
  },  
  {
    title: "5G Technology",
    heading: "5G Technology: Revolutionizing Connectivity",
    content: `5G technology is the fifth generation of mobile networks, promising faster speeds and lower latency...`,
    imageUrl: "/5GTechnology.jpg"
  },  
  {
    title: "Internet of Things",
    heading: "The Internet of Things: Connecting the World",
    content: `The Internet of Things (IoT) refers to the network of physical devices connected to the internet...`,
    imageUrl: "/Internet_of_Things.jpg"
  },
  {
    title: "Artificial Intelligence",
    heading: "Artificial Intelligence: Transforming Industries",
    content: `Artificial Intelligence (AI) is revolutionizing industries by automating processes and enhancing decision-making...`,
    imageUrl: "/ai3.webp"
  },
  {
    title: "Data Science",
    heading: "Data Science: Unleashing the Power of Data",
    content: `Data science combines statistics, data analysis, and machine learning to extract insights from data...`,
    imageUrl: "/DataScience.webp"
  },

  {
    title: "Robotics",
    heading: "The Future of Robotics: Innovations and Applications",
    content: `Robotics is the branch of technology that deals with the design, construction, operation, and use of robots...`,
    imageUrl: "/Robotics.jpg"
  },     
];

const Page = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      <Navbar/>
    <section className="text-gray-600 body-font">

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {summaries.map((item, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
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
    </div>
  );
};

export default Page;
        