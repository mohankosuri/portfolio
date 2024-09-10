import React from "react";

import Ev from '../assets/ev.png'
import Speedy from '../assets/sppedy.png'

const projects = [
  { id: 1, title: "Ev-olution", description: "A cool web app built with React", image:Ev ,link:"https://ev-cars.vercel.app/" },
  { id: 2, title: "Project Two", description: "A mobile-friendly website built with Tailwind CSS.", image:Speedy,link:"https://speedyeats.vercel.app/"},
  { id: 3, title: "Project Two", description: "A mobile-friendly website built with Tailwind CSS.", image: "/project2.jpg" },
  { id: 4, title: "Project Two", description: "A mobile-friendly website built with Tailwind CSS.", image: "/project2.jpg" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <a href={project.link} target="blank" className="text-blue-500 hover:text-blue-300 mt-4 block">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
