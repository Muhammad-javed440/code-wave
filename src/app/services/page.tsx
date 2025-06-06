import React from 'react'

const services = [
  {
    title: "Agentic AI Solutions",
    description: "Custom GPT-powered agents for automation, chatbots, and productivity tools using OpenAI SDK.",
    icon: "🤖",
  },
  {
    title: "Web Development",
    description: "Modern, fast, and responsive websites using Next.js, Tailwind CSS, and more.",
    icon: "💻",
  },
  {
    title: "Social Media Management",
    description: "Grow your audience with content strategies, post scheduling, and analytics.",
    icon: "📱",
  },
  {
    title: "Video Editing",
    description: "High-quality video editing for YouTube, Instagram, and professional use.",
    icon: "🎬",
  },
  {
    title: "Photo Editing",
    description: "Creative and professional photo retouching and graphic design.",
    icon: "🖼️",
  },
];


function page() {
  return (
     <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-gray-600 mb-12">
          We offer end-to-end digital solutions to help you grow and automate your business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="border p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page