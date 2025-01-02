import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:your.email@example.com"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-center">your.email@example.com</p>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600 text-center">@yourusername</p>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Linkedin size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-center">@yourusername</p>
            </a>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;