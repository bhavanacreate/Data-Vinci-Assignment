import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                Assignment Implementation
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                DataVinci
                <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  Assignment Demo
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Demonstrating responsive layout implementation and nested checkbox functionality 
                with modern React patterns and beautiful UI design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
                View Tasks
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Mobile-First Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Nested State Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>WCAG Compliant</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5"></div>
              <div className="relative">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-12 rounded-lg transition-all duration-300 hover:scale-105 ${
                        i % 3 === 0 ? 'bg-blue-100 hover:bg-blue-200' : 
                        i % 3 === 1 ? 'bg-emerald-100 hover:bg-emerald-200' : 'bg-orange-100 hover:bg-orange-200'
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-1/2 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;