import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a passionate Computer Science student at Stanford University, I blend technical expertise with creative problem-solving to build innovative solutions. With a focus on full-stack development and artificial intelligence, I'm constantly pushing the boundaries of what's possible in software engineering.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My goal is to leverage technology to create meaningful impact in healthcare and education sectors. Through my academic projects and internships, I've developed a strong foundation in modern web technologies and machine learning frameworks.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;