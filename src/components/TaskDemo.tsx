import React from 'react';
import CheckboxDemo from './CheckboxDemo';
import { Monitor, Smartphone, Tablet, CheckCircle } from 'lucide-react';

const TaskDemo: React.FC = () => {
  return (
    <section id="tasks" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Assignment Tasks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Demonstrating both responsive layout implementation and nested checkbox functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Task 1: Responsive Layout */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-blue-600" />
                Task 1: Responsive Layout
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p>Mobile-first responsive design implementation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p>Collapsible navigation with hamburger menu</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p>Flexible content sections and grid layouts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p>WCAG compliant accessibility features</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Responsive Breakpoints:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-3 w-3 text-blue-600" />
                      <span className="text-gray-600">Mobile</span>
                    </div>
                    <span className="text-gray-500 font-mono">&lt; 768px</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <Tablet className="h-3 w-3 text-emerald-600" />
                      <span className="text-gray-600">Tablet</span>
                    </div>
                    <span className="text-gray-500 font-mono">768px - 1024px</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-3 w-3 text-orange-600" />
                      <span className="text-gray-600">Desktop</span>
                    </div>
                    <span className="text-gray-500 font-mono">&gt; 1024px</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Try it:</strong> Resize your browser window or use DevTools to see the responsive behavior in action!
                </p>
              </div>
            </div>
          </div>

          {/* Task 2: Nested Checkbox */}
          <div className="space-y-6">
            <CheckboxDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDemo;