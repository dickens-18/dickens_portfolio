import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you need a website, web app, or just want to connect, 
            feel free to reach out!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:your.email@example.com" 
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:from-cyan-900/50 hover:to-cyan-900/30 transition-all duration-300 border border-gray-700 hover:border-cyan-500 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📧</div>
            <h3 className="font-semibold mb-2 text-lg">Email</h3>
            <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">your.email@example.com</p>
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:from-purple-900/50 hover:to-purple-900/30 transition-all duration-300 border border-gray-700 hover:border-purple-500 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
            <h3 className="font-semibold mb-2 text-lg">GitHub</h3>
            <p className="text-gray-400 group-hover:text-purple-400 transition-colors">github.com/yourusername</p>
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:from-blue-900/50 hover:to-blue-900/30 transition-all duration-300 border border-gray-700 hover:border-blue-500 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="font-semibold mb-2 text-lg">LinkedIn</h3>
            <p className="text-gray-400 group-hover:text-blue-400 transition-colors">linkedin.com/in/yourusername</p>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 pt-12"
        >
          <p className="text-gray-500">
            Built with ❤️ using Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}