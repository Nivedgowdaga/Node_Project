import React from 'react';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Google',
    period: 'Summer 2023',
    description: [
      'Developed and implemented new features for Google Cloud Platform',
      'Collaborated with cross-functional teams to optimize cloud services',
      'Improved system performance by 40% through code optimization',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'Stanford AI Lab',
    period: 'Jan 2023 - Present',
    description: [
      'Conducting research on machine learning applications in healthcare',
      'Published 2 papers in leading AI conferences',
      'Mentored 3 undergraduate students in research projects',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    period: 'Summer 2022',
    description: [
      'Built and deployed a full-stack web application using React and Node.js',
      'Implemented real-time features using WebSocket',
      'Reduced page load time by 60% through optimization',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-blue-600 font-medium">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;