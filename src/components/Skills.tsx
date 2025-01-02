import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Linux', level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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