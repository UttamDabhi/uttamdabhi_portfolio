import React from 'react';
import { ExternalLink, Github, Star, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
  {
    title: 'EMI Predict AI',
    description:
      'AI-powered financial application built with Python and Machine Learning to predict EMI and deliver intelligent loan insights for smarter financial planning decisions.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=400',
    tags: ['Python', 'AI/ML', 'Machine Learning', 'Streamlit'],
    github: '',
    demo: 'https://emipredict-ai-uttam.streamlit.app/',
    featured: true,
    stats: { stars: 0, users: 0, date: '2026' }
  },
  {
    title: 'Smart Factory AI',
    description:
      'AI-powered smart factory solution using Python and Machine Learning for industrial data analysis, monitoring, anomaly detection, and intelligent decision-making.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=400',
    tags: ['Python', 'AI/ML', 'Machine Learning', 'Data Analytics'],
    github: '',
    demo: 'https://smartfactory-ai-uttam.streamlit.app/',
    featured: true,
    stats: { stars: 0, users: 0, date: '2026' }
  },
  {
    title: 'Tourism Experience Analytics',
    description:
      'Python-based AI and data analytics application for analyzing tourism experiences, visitor insights, travel patterns, and customer behavior',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&h=400',
    tags: ['Python', 'Data Analytics', 'AI/ML', 'Streamlit'],
    github: '',
    demo: 'https://tourism-experience-analytics-uttam.streamlit.app/',
    featured: false,
    stats: { stars: 0, users: 0, date: '2026' }
  },
  {
    title: 'Workforce Intelligence',
    description:
      'Intelligent workforce analytics application built with Python and AI to analyze employee data, productivity, workforce trends, and business insights.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=400',
    tags: ['Python', 'AI/ML', 'Data Analytics', 'Streamlit'],
    github: '',
    demo: 'https://uttam-workforce-intelligence.streamlit.app/',
    featured: false,
    stats: { stars: 0, users: 0, date: '2026' }
  }
];

  const tagColors: Record<string, string> = {
    'React': 'bg-cyan-500/20 text-cyan-600',
    'Node.js': 'bg-green-500/20 text-green-600',
    'MongoDB': 'bg-green-500/20 text-green-600',
    'Express': 'bg-yellow-500/20 text-yellow-600',
    'Socket.io': 'bg-purple-500/20 text-purple-600',
    'MERN': 'bg-blue-500/20 text-blue-600',
    'JWT': 'bg-red-500/20 text-red-600',
    'Cloudinary': 'bg-orange-500/20 text-orange-600',
    'Chart.js': 'bg-pink-500/20 text-pink-600',
    'API': 'bg-indigo-500/20 text-indigo-600',
    'Tailwind': 'bg-teal-500/20 text-teal-600',
    'Framer Motion': 'bg-violet-500/20 text-violet-600'
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
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
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore my AI/ML projects built with Python, Machine Learning, Data Analytics, NLP, and Streamlit to solve real-world problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {project.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Featured
                </div>
              )}
              
              <div className="glass-effect rounded-xl overflow-hidden hover-lift">
                <div className="relative overflow-hidden">
                  <img
  src={project.image}
  alt={`${project.title} - Uttam Dabhi AI/ML Project`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Stats Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                      <Star className="h-3 w-3 fill-current" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                      <Users className="h-3 w-3" />
                      {project.stats.users}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      {project.stats.date}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tagColors[tag] || 'bg-primary/20 text-primary'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
  <motion.a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <ExternalLink className="h-4 w-4" />
    View Live Demo
  </motion.a>
</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/UttamDabhi"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
