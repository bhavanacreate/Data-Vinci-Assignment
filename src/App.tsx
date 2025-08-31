import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TaskDemo from './components/TaskDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <TaskDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;