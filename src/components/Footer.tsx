import React from 'react';
import { Github, Linkedin, Twitter, Zap, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">DataVinci</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Assignment demonstration showcasing responsive design and interactive components with modern React.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Assignment Tasks */}
          <div>
            <h3 className="font-semibold mb-4">Assignment Tasks</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#tasks" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">Task 1: Responsive Layout <ExternalLink className="h-3 w-3 ml-1" /></a></li>
              <li><a href="#tasks" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">Task 2: Nested Checkboxes <ExternalLink className="h-3 w-3 ml-1" /></a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">Implementation Features</a></li>
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Demo Overview</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold mb-4">Technologies Used</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">React 18 + TypeScript</span></li>
              <li><span className="text-gray-400">Tailwind CSS</span></li>
              <li><span className="text-gray-400">Lucide React Icons</span></li>
              <li><span className="text-gray-400">Vite Build Tool</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Assignment Info</h3>
            <p className="text-gray-400 text-sm mb-4">
              Built as part of the DataVinci technical assessment.
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">
                <strong className="text-white">Completion:</strong> 100%
              </div>
              <div className="text-gray-400">
                <strong className="text-white">Status:</strong> Ready for Review
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 DataVinci Assignment Demo. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;