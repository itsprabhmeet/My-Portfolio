import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Python Development Internship',
      company: 'Technoctanet Services Pvt LTD',
      location: 'Work from Home',
      duration: 'February 2025 - March 2025',
      description: [
        'Learned key concepts and practical applications in Python Development',
        'Created an ATM Machine Simulation project as part of the internship program',
        'Gained hands-on experience with Python programming and software development practices',
        'Applied object-oriented programming principles in real-world project scenarios'
      ],
      technologies: ['Python', 'OOP', 'Software Development', 'Project Management'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
            <Briefcase size={20} className="text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development and technology
          </p>
        </div>

        {/* Single experience layout - centered */}
        {experiences.length === 1 ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6 shadow-lg">
                  <Briefcase size={32} className="text-white" />
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {experiences[0].title}
                </h3>
                <div className="flex items-center justify-center text-orange-600 dark:text-orange-400 font-semibold text-lg mb-3">
                  <Briefcase size={18} className="mr-2" />
                  {experiences[0].company}
                </div>
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-2">
                  <MapPin size={16} className="mr-2" />
                  {experiences[0].location}
                </div>
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  {experiences[0].duration}
                </div>
              </div>

              <div className="max-w-3xl mx-auto mb-8">
                <ul className="space-y-4">
                  {experiences[0].description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-400 leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {experiences[0].technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full font-medium border border-orange-200 dark:border-orange-700 hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Timeline layout for multiple experiences */
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500 to-red-500"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-orange-600 dark:text-orange-400 font-medium mb-2">
                            <Briefcase size={16} className="mr-2" />
                            {experience.company}
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                            <MapPin size={14} className="mr-1" />
                            {experience.location}
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar size={14} className="mr-1" />
                            {experience.duration}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium border border-orange-200 dark:border-orange-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;