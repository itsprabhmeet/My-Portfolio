import React from 'react';
import { Code, Heart, Coffee, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '3', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'Certifications', value: '2+', color: 'from-green-500 to-emerald-500' },
    { icon: Award, label: 'Technologies', value: '6+', color: 'from-yellow-500 to-orange-500' },
    { icon: Zap, label: 'Education Level', value: 'BCA', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Heart size={20} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi there! I'm Prabhmeet, a Backend Developer based in New Delhi, India.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm passionate about building robust backend systems that solve real-world problems. 
              With a strong foundation in Python and C++, I specialize in designing and developing 
              scalable server-side applications and APIs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently pursuing my Bachelor of Computer Application from GGSIPU, New Delhi. 
              I gained practical experience through my internship at Technoctanet Services Pvt LTD, 
              where I honed my Python development skills and contributed to critical software projects.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'C++', 'SQL', 'Java', 'Android Development', 'Data Structures'].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <stat.icon size={24} className="text-white" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;