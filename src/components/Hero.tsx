import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, Download, Sparkles, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Backend Developer', 'Python Developer', 'Problem Solver', 'Software Engineer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.docx';
    link.download = 'Prabhmeet_Singh_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="relative mx-auto w-36 h-36 mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
              <img 
                src="/public/IMG_20231107_171602_719.jpg" 
                alt="Prabhmeet Singh" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Prabhmeet Singh
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 min-h-[2em] flex items-center justify-center">
            <span className="inline-block">
              I'm a{' '}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500">
                {roles[currentRole]}
              </span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Highly skilled Backend Developer with a robust foundation in Python and C++. 
            Proven ability to design, develop, and optimize scalable server-side applications and APIs. 
            Eager to build efficient and high-performance backend systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center gap-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get In Touch</span>
              <Mail size={20} className="relative group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <button 
              onClick={handleResumeDownload}
              className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2"
            >
              Download Resume
              <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/itsprabhmeet" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border border-gray-200 dark:border-gray-700">
              <Github size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/prabhmeetsingh-507bab22b/" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border border-gray-200 dark:border-gray-700">
              <Linkedin size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/its.prabhmeet/" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border border-gray-200 dark:border-gray-700">
              <Instagram size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Hero;