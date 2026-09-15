import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Database, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
  "AI/ML Developer",
  "Python Developer",
  "Machine Learning Developer",
  "NLP Developer",
];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { icon: Code, delay: 0, x: 20, y: 30 },
    { icon: Database, delay: 0.5, x: 80, y: 20 },
    { icon: Palette, delay: 1, x: 70, y: 80 },
    { icon: Zap, delay: 1.5, x: 10, y: 70 }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 dark:opacity-20"
          style={{ 
            left: `${item.x}%`, 
            top: `${item.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          <item.icon className="h-8 w-8 text-primary" />
        </motion.div>
      ))}
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-slate-900 dark:text-white mb-6 text-shadow"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-primary via-purple-600 to-cyan-600 bg-clip-text text-transparent rounded-xl shadow-lg animate-pulse-glow">
              Uttam Dabhi
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-xl sm:text-2xl lg:text-4xl text-slate-600 dark:text-slate-300 mb-8 font-medium h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              {words[currentWordIndex]}
            </motion.span>
          </motion.div>
          
          <motion.p
            className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            AI/ML Developer and Python Developer building intelligent, data-driven solutions with Machine Learning, NLP, Data Analytics, and modern AI technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="relative bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="relative border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center cursor-pointer"
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
