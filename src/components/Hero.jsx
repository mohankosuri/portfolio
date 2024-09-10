import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative text-center z-10">
        <h1 className="text-5xl font-bold text-white">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-300">I create amazing web experiences</p>
        <a href="#projects" className="mt-8 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
