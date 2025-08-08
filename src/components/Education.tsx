import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'GGSIPU, New Delhi, India',
      duration: 'To be Graduated By: 2026',
      status: 'In Progress',
      level: 'Undergraduate',
      icon: GraduationCap,
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'Mata Gujri Public School, Delhi, India',
      duration: 'Completed in: 2023',
      status: 'Completed',
      level: 'Class XII',
      icon: BookOpen,
    },
    {
      degree: 'Secondary School Education',
      institution: 'Mata Gujri Public School, Delhi, India',
      duration: 'Completed in: 2021',
      status: 'Completed',
      level: 'Class X',
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
            <GraduationCap size={20} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My academic journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>

          <div className="space-y-12">
            {educationData.map((education, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300">
                          <education.icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                              {education.degree}
                            </h3>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              education.status === 'In Progress' 
                                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700'
                                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700'
                            }`}>
                              {education.status}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                            <MapPin size={14} className="mr-2" />
                            {education.institution}
                          </div>
                          
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar size={14} className="mr-2" />
                            {education.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium border border-indigo-200 dark:border-indigo-700">
                        {education.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;