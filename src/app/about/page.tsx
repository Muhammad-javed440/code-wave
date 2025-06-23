import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
const page = () => {
  return (
<div className="">
  <Navbar/>
  <section className="text-gray-900 bg-white body-font">
    <div className="container px-5 py-24 mx-auto max-w-7xl">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">
          OUR TEAM
        </h1>
        <p className="mx-auto leading-relaxed text-base max-w-3xl px-4 sm:px-0">
          Our team is a group of passionate developers, designers, and AI experts dedicated to helping businesses grow online. We combine creativity, technology, and smart automation to build powerful websites and effective social media strategies. With a focus on results, we bring ideas to life through innovation and collaboration.
        </p>
      </div>
      <div className="flex flex-wrap justify-center -m-4">
        {[ /* Repeat for each team member */ 
          {
            name: "Muhammad Javed",
            role: "Agentic AI Engineer & UI Developer",
            imgSrc: "/javed.jpeg",
            description: `An Agentic AI Engineer & Full Stack Web Developer designs intelligent, autonomous AI agents and builds complete web solutions. They integrate AI into frontend and backend systems to automate tasks, enhance user experience, and deliver scalable, smart web applications.`,
          },
          {
            name: "Muhammad Sohail",
            role: "Agentic AI Engineer & Full stack Web Developer",
            imgSrc: "/boy.jpg",
            description: `An Agentic AI Engineer & Full Stack Web Developer designs intelligent, autonomous AI agents and builds complete web solutions. They integrate AI into frontend and backend systems to automate tasks, enhance user experience, and deliver scalable, smart web applications.`,
          },
          {
            name: "Amna Javed",
            role: "Agentic AI Engineer & UI Developer",
            imgSrc: "/girl1.jpg",
            description: `An Agentic AI Engineer & Full Stack Web Developer designs intelligent, autonomous AI agents and builds complete web solutions. They integrate AI into frontend and backend systems to automate tasks, enhance user experience, and deliver scalable, smart web applications.`,
          },
          {
            name: "Noor Fatima",
            role: "Social Media Marketing Manager",
            imgSrc: "/girl1.jpg",
            description: `A Social Media Marketing Manager is responsible for growing a brands presence on social platforms like Instagram, Facebook, LinkedIn, Twitter (X), and TikTok. Their main goal is to attract followers, increase engagement, and turn viewers into customers.`,
          },
        ].map(({name, role, imgSrc, description}, idx) => (
          <div
            key={idx}
            className="p-4 sm:w-1/2 lg:w-1/4 w-full"
          >
            <div className="h-full flex flex-col items-center text-center">
              <Image
                className="rounded-md w-full h-auto object-cover"
                alt={name}
                src={imgSrc}
                width={300}
                height={300}
                sizes="(max-width: 640px) 100vw, 300px"
                priority={idx === 0} // optional: prioritize first image
              />
              <div className="w-full mt-4 px-2">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  {name}
                </h2>
                <h3 className="text-gray-500 mb-3">{role}</h3>
                <p className="mb-4 text-sm sm:text-base">{description}</p>
                <span className="inline-flex space-x-4 justify-center text-gray-500">
                  {/* Social icons here */}
                  {/* Example: Facebook */}
                  <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a href="#" aria-label="WhatsApp" className="hover:text-green-500 transition-colors">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

  )
}

export default page