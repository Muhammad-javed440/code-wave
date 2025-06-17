import React from "react";
import Image from "next/image";


function Dashboard() {
  return (
   <section className="text-gray-600 bg-white body-font">
  <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-10 md:py-20">
    
    {/* Text Content */}
    <div className="md:w-1/2 w-full flex flex-col md:items-start items-center text-center md:text-left space-y-6 md:space-y-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
        Boost Your Marketing the Easy Way
        <br className="hidden lg:inline-block" />
        With Smart, Automated Help
      </h1>
      <p className="text-base leading-relaxed max-w-lg text-gray-700">
        We help modern businesses grow faster by using smart, automated
        tools for marketing and content creation. Whether you need a
        website, social media posts, or help reaching new customers, our
        AI-powered solutions make everything easier, faster, and more
        effective — so you can focus on running your business.
      </p>
      
    </div>

    {/* Image */}   
    <div className="md:w-1/2 w-full mb-10 md:mb-0 flex justify-center">
      <Image
        className="object-cover rounded-lg max-w-full h-auto"
        alt="hero"
        src="/ai.jpg"
        width={500}
        height={300}
        priority
      />
    </div>
  </div>
</section>

     
  );
}

export default  Dashboard;
