import React from 'react';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Basic ATM Working Python',
      description: 'A comprehensive ATM simulation system built with Python. Features include account management, transaction processing, balance inquiry, and secure PIN authentication with a user-friendly interface.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OOP', 'Banking System', 'Security', 'Simulation'],
      liveUrl: '#',
      githubUrl: 'https://github.com/itsprabhmeet/Basic-ATM-working-Python-',
      date: '2025',
    },
    {
      title: 'Car Parking Project C++',
      description: 'A car parking management system developed in C++. Features include parking slot allocation, vehicle tracking, fee calculation, and comprehensive parking management with efficient data handling.',
      image: 'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['C++', 'OOP', 'Management System', 'Data Structures', 'Algorithms'],
      liveUrl: '#',
      githubUrl: 'https://github.com/itsprabhmeet/Car-Parking-Project-C-',
      date: '2025',
    },
    {
      title: 'Basic Weather App with GUI in Python',
      description: 'A weather application with graphical user interface built in Python. Features real-time weather data, location-based forecasts, and an intuitive GUI for easy weather information access.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'GUI', 'Weather API', 'Tkinter', 'Real-time Data'],
      liveUrl: '#',
      githubUrl: 'https://github.com/itsprabhmeet/A-Basic-Weather-App-with-GUI-in-Python',
      date: '2025',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <Code size={20} className="text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on recently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Github size={18} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-300 hover:underline"
                  >
                    <Github size={14} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;