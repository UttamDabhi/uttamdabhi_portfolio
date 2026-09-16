import React from 'react';
import { ArrowRight, Award, Users, Coffee, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Award, value: "3+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
    { icon: Users, value: "2+", label: "Years of Hans On Experience", color: "from-purple-500 to-pink-500" },
    { icon: Coffee, value: "500+", label: "Cups of Coffee", color: "from-orange-500 to-red-500" },
    { icon: Heart, value: "100%", label: "Passion for Code", color: "from-green-500 to-teal-500" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Uttam Dabhi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://imgh.in/host/ak18cf"
                  alt="Uttam Dabhi Profile"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Decorative Glow */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>

          {/* Description + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm Uttam Dabhi, an AI/ML Developer and Python Developer passionate about building intelligent, data-driven solutions. With expertise in Machine Learning, NLP, Artificial Intelligence, and Data Analytics, I turn complex problems into practical AI applications.
            </motion.p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="glass-effect p-6 rounded-xl hover-lift text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons with spacing */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                View My Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <a
                href="https://drive.google.com/file/d/1mzlpDtbck4sDDGdWlk0LeNJVa1J6oeeI/view?usp=sharing"
                download
                className="inline-block mt-4 sm:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                📄 Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
