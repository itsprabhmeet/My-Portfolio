import React from 'react';
import { Code, Settings, Smartphone, BarChart3 } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: Settings,
      description: 'Building robust server solutions',
      skills: [
        { name: 'Python', level: 90, color: 'from-slate-600 to-slate-700' },
        { name: 'C++', level: 85, color: 'from-slate-500 to-slate-600' },
        { name: 'Java', level: 80, color: 'from-slate-700 to-slate-800' },
        { name: 'SQL Database', level: 85, color: 'from-slate-600 to-slate-700' },
        { name: 'OOP', level: 88, color: 'from-slate-500 to-slate-600' },
      ],
    },
    {
      title: 'Development',
      icon: Smartphone,
      description: 'Application development skills',
      skills: [
        { name: 'Android Development', level: 75, color: 'from-gray-600 to-gray-700' },
        { name: 'XML', level: 80, color: 'from-gray-500 to-gray-600' },
        { name: 'Data Structures', level: 85, color: 'from-gray-700 to-gray-800' },
        { name: 'Algorithms', level: 82, color: 'from-gray-600 to-gray-700' },
        { name: 'Data Analysis', level: 70, color: 'from-gray-500 to-gray-600' },
      ],
    },
    {
      title: 'Tools & Analysis',
      icon: BarChart3,
      description: 'Development tools and analysis',
      skills: [
        { name: 'Excel', level: 80, color: 'from-zinc-600 to-zinc-700' },
        { name: 'Git', level: 85, color: 'from-zinc-500 to-zinc-600' },
        { name: 'Problem Solving', level: 90, color: 'from-zinc-700 to-zinc-800' },
        { name: 'Database Design', level: 82, color: 'from-zinc-600 to-zinc-700' },
        { name: 'API Development', level: 78, color: 'from-zinc-500 to-zinc-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
            <Code size={20} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-xl mb-4 mx-auto shadow-lg">
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;