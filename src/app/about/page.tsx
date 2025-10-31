import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
<div className="">
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
            imgSrc: "/javed.png",
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