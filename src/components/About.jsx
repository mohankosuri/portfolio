import React from 'react';
import Logo from '../assets/mohan.jpg'

const About = () => {
  return (
    <div className="bg-[#fdf6f0] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 h-[400px]">
            <img
              src={Logo}
              alt="profile"
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-6 text-gray-700">
            <p className="text-lg mb-4">
              Hi, I'm <span className="font-semibold text-gray-900">Mohan Kosuri</span>, a passionate developer specializing in building beautiful and functional web and mobile applications. I have experience in working with <span className="font-semibold">React</span> for frontend development and <span className="font-semibold">React Native</span> for mobile app development.
            </p>
            <p className="text-lg mb-4">
              With a deep understanding of JavaScript, modern web technologies, and mobile app development, I love to solve complex problems and create responsive, user-friendly applications. I am constantly learning and improving my skills to stay updated with the latest trends and technologies.
            </p>
            <p className="text-lg mb-4">
              When I’m not coding, I enjoy exploring new tech, contributing to open-source projects, and sharing knowledge with the community. Let's build something amazing together!
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/mohankosuri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kosuri-mohan-krishna-gowd-b22b40257/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
              <a
                href="mailto:kosurimohankrishna1@gmail.com"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
