
import React from 'react';
import { FaPaperPlane, FaDownload, FaYoutube, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaBriefcase, FaTasks, FaUsers } from 'react-icons/fa';
import Logo from '../assets/mohan.jpg';
import Resume from '../assets/MohanResume.pdf'

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fdf6f0]">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
        <div className="text-center md:text-left">
          <h2 className="text-sm text-[#f76c6c] font-bold">WEB DEVELOPER</h2>
          <h1 className="text-5xl font-black text-[#2d2d2d] mt-2">
            Hello, my name is <br /> Mohan Kosuri
          </h1>
          <p className="text-gray-600 mt-4">
            Brief description with insights into myself, my vocational journey, and what I engage in professionally.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <button className="bg-[#f76c6c] text-white py-2 px-6 rounded-full flex items-center space-x-2">
              <span>Contact me</span>
              <FaPaperPlane />
            </button>
		
            <a className="bg-[#2d2d2d] text-white py-2 px-6 rounded-full flex items-center space-x-2" href={Resume} 
            download="Mohan_Kosuri_Resume.pdf" >
              <span>Download CV</span>
              <FaDownload />
            </a>
          </div>
          <div className="mt-8 flex justify-center md:justify-start space-x-4 text-gray-600">
            <FaYoutube />
            <FaLinkedin />
            <FaGithub />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-2">
            <FaBriefcase className="text-[#f76c6c]" />
            <span className="text-sm font-bold">2 Years of Experience</span>
          </div>
          
          
          <div className="relative">
            <div className="w-64 h-64 bg-[#f76c6c] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={Logo}
                alt="Portrait of Ryan Davis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;