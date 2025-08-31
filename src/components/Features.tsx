import React from 'react';
import { Smartphone, Monitor, Zap, Shield, Layout, CheckSquare } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile First',
      description: 'Responsive design starting from mobile breakpoints, scaling up to desktop seamlessly.',
      color: 'blue'
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Responsive Grid',
      description: 'Flexible layouts using CSS Grid and Flexbox for optimal content organization.',
      color: 'emerald'
    },
    {
      icon: <CheckSquare className="h-8 w-8" />,
      title: 'Nested Logic',
      description: 'Complex state management for hierarchical checkbox trees with indeterminate states.',
      color: 'orange'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Accessible',
      description: 'WCAG compliant with proper keyboard navigation and screen reader support.',
      color: 'purple'
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Component Architecture',
      description: 'Modular React components with TypeScript for maintainable and scalable code.',
      color: 'indigo'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance',
      description: 'Optimized rendering with React hooks and efficient state management patterns.',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      orange: 'bg-orange-100 text-orange-600',
      purple: 'bg-purple-100 text-purple-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      pink: 'bg-pink-100 text-pink-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Implementation Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every component demonstrates modern React development practices with attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-200`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;