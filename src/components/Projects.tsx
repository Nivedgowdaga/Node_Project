import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Health Tracker',
    description: 'Developed a machine learning-based health monitoring system that predicts potential health risks using user activity data and vital signs.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Smart Learning Platform',
    description: 'Created an adaptive learning platform that personalizes content delivery based on student performance and learning patterns.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Sustainable City Dashboard',
    description: 'Built a real-time dashboard for monitoring and optimizing city resources using IoT sensor data and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1498075702571-ecb018f3752d?auto=format&fit=crop&q=80&w=800',
    technologies: ['Vue.js', 'D3.js', 'Python', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                    Demo
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