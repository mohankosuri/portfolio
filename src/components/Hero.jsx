import React from "react";
import Logo from '../assets/mohan.jpg';
import Resume from '../assets/reume.pdf';

const Hero = () => {
  return (
    <div className="flex items-center justify-center mt-[100px] bg-white">
      <div className="bg-white p-8 rounded-lg flex items-center">
        <div className="mr-8 w-3/4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hi, I am Mohan Kosuri,
            <br />
            React & React-Navive Developer
          </h1>
          <p className="text-gray-600 mb-6">
            A passionate developer specializing in building beautiful and functional web and mobile applications. I have experience in working with React for frontend development and React Native for mobile app development.
          </p>
          <a 
            href={Resume} 
            download="Mohan_Kosuri_Resume.pdf" 
            className="bg-red-500 text-white px-6 py-2 rounded-full"
          >
            Download Resume
          </a>
        </div>
        <div className="w-1/3">
          <img
            className="rounded-full w-[300px] h-[300px] object-cover border-2 shadow-lg shadow-red-800"
            src={Logo}
            alt="Portrait of Mohan Kosuri, a creative technologist, wearing a cap and smiling."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
