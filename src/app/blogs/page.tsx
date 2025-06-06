"use client";
import Image from "next/image";
import React,{useState} from "react";

const AgenticSummary = `
Agentic AI refers to artificial intelligence systems that
exhibit goal-directed behavior, making decisions and taking actions to achieve specific objectives. 
These systems are designed to operate autonomously, learning from their environment and adapting to
 new information. As AI technology continues to advance, the potential applications for agentic systems are vast, 
 ranging from personal assistants to complex problem-solving agents in various industries.
`;

const socialMediaSummary = `In today's digital age, social media has become an
integral part of our lives, shaping how we communicate,
share information, and connect with others. From Facebook
to Instagram, these platforms have transformed the way we
interact, allowing us to share our thoughts, experiences,
and creativity with a global audience. However, the rise
of social media also brings challenges, such as the spread
of misinformation, privacy concerns, and the impact on
mental health. As we navigate this complex landscape, it's
essential to understand the power of social media and its
role in shaping public discourse and individual behavior.
`;

const videoEditingSummary = `Video editing is the process of manipulating and rearranging
video footage to create a new, edited version. It involves
cutting, trimming, and combining clips, adding effects, and
adjusting audio to enhance the overall quality and impact
of the video. With the rise of digital technology, video
editing has become more accessible, allowing creators to
produce professional-looking content from the comfort of
their own homes. As the demand for video content continues
to grow, understanding the fundamentals of video editing
is essential for anyone looking to make their mark in the
digital world.
`;


const Page = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image  
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=2048x2048&w=is&k=20&c=-dkoxqirWcLDhkIjVgkLfRXdNHqCJdPKswM7tkjTcN0="
                  alt="blog"
                  width={740}
                  height={480}  
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Agentic AI
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    What Is Agentic AI? The Rise of Intelligent, Goal-Oriented
                    Machines
                  </h1>
                  <div>
                    <p
                      className={`leading-relaxed mb-3 transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {AgenticSummary}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-indigo-500 hover:underline text-sm mb-4"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://img.freepik.com/premium-photo/womans-head-with-facebook-app-it_951133-6454.jpg?uid=R165604391&ga=GA1.1.2089862474.1737326735&semt=ais_hybrid&w=740"
                  alt="blog"
                  width={740}
                  height={480}  
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Social Media
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Power of Social Media in the Digital Age
                  </h1>
                  <div>
                    <p
                      className={`leading-relaxed mb-3 transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {socialMediaSummary}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-indigo-500 hover:underline text-sm mb-4"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://media.istockphoto.com/id/2124050589/photo/digital-chatbot-and-artificial-intelligence-technology-for-business-robot-applications-and.jpg?s=612x612&w=0&k=20&c=09GNnzt_FgYd4n3dQLdU1eZA686vThU1yMDB7VMjQcY="
                  alt="blog"
                  width={740}
                  height={480}  
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Video Editing
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    🎬 The Art of Video Editing: A Beginner’s Guide
                  </h1>
                  <div>
                    <p
                      className={`leading-relaxed mb-3 transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {videoEditingSummary}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-indigo-500 hover:underline text-sm mb-4"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://img.freepik.com/free-photo/macro-eye-iris_23-2151618522.jpg?uid=R165604391&ga=GA1.1.2089862474.1737326735&semt=ais_hybrid&w=740"
                  alt="blog"
                  width={740}
                  height={480}  
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Agentic AI
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    What Is Agentic AI? The Rise of Intelligent, Goal-Oriented
                    Machines
                  </h1>
                  <div>
                    <p
                      className={`leading-relaxed mb-3 transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {AgenticSummary}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-indigo-500 hover:underline text-sm mb-4"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://img.freepik.com/premium-photo/digital-online-marketing-commerce-sale-concept_1128603-1564.jpg?uid=R165604391&ga=GA1.1.2089862474.1737326735&semt=ais_hybrid&w=740"
                  alt="blog"
                  width={740}
                  height={480}    
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Social Media
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Power of Social Media in the Digital Age
                  </h1>
                  <div>
                    <p
                      className={`leading-relaxed mb-3 transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {socialMediaSummary}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-indigo-500 hover:underline text-sm mb-4"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://img.freepik.com/free-photo/metaverse-virtual-love-collage_52683-89576.jpg?uid=R165604391&ga=GA1.1.2089862474.1737326735&semt=ais_hybrid&w=740"
                  alt="blog"
                  width={740}
                  height={480}  
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Video Editing
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    🎬 The Art of Video Editing: A Beginner’s Guide
                  </h1>
                  <div>
                    <p
                      className={`leading-relaxed mb-3 transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {videoEditingSummary}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-indigo-500 hover:underline text-sm mb-4"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://media.istockphoto.com/id/1289323170/photo/visual-contents-concept-social-networking-service-streaming-video-communication-network.jpg?s=2048x2048&w=is&k=20&c=Rn71rDDhsCvZKQFZ2NKI7KRp5mN__THlphoLllYSclA="
                  alt="blog"
                  width={740}
                  height={480}  
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Agentic AI
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    What Is Agentic AI? The Rise of Intelligent, Goal-Oriented
                    Machines
                  </h1>
                  <div>
                    <p
                      className={`leading-relaxed mb-3 transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {AgenticSummary}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-indigo-500 hover:underline text-sm mb-4"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://media.istockphoto.com/id/927659334/photo/networking-chat-communication-online-social-media-social-network.jpg?s=612x612&w=0&k=20&c=zz9c910Sb2tjsvrMM4IcEsCyj-c3EQru1PN4EqWtuAA="
                  alt="blog"
                  width={740}
                  height={480}  
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Social Media
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Power of Social Media in the Digital Age
                  </h1>
                  <div>
                    <p
                      className={`leading-relaxed mb-3 transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {socialMediaSummary}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-indigo-500 hover:underline text-sm mb-4"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://img.freepik.com/premium-psd/artificial-intelligence-social-media-post_531242-840.jpg?uid=R165604391&ga=GA1.1.2089862474.1737326735&semt=ais_hybrid&w=740"
                  alt="blog"
                  width={740}
                  height={480}
                />

                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Video Editing
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    🎬 The Art of Video Editing: A Beginner’s Guide
                  </h1>
                  <div>
                    <p
                      className={`leading-relaxed mb-3 transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {videoEditingSummary}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-indigo-500 hover:underline text-sm mb-4"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
