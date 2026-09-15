import React from 'react';
import { ArrowUp, Heart, Code, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.15)_1px,_transparent_0)] bg-[size:30px_30px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
              Uttam Dabhi
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
             AI/ML Developer passionate about building intelligent, data-driven solutions with Python and modern AI technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200 text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600 dark:text-slate-300">umdabhi2004@gmail.com</p>
              <p className="text-slate-600 dark:text-slate-300">+91 99780 95704</p>
              <p className="text-slate-600 dark:text-slate-300">Ahemdabad, Gujarat, India</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm mb-4 md:mb-0">
            <span>© 2024 Uttam Dabhi. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>&</span>
            <Code className="h-4 w-4 text-primary" />
            <span>powered by</span>
            <Coffee className="h-4 w-4 text-orange-500" />
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-cyan-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-full blur-xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-full blur-xl -z-10"></div>
      </div>
    </footer>
  );
}
