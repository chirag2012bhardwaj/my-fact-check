import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Zap, Shield, Bot } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToFactChecker = () => {
    document.getElementById('fact-checker')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-matte-gray to-matte-black opacity-50" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-neon-cyan rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.7, 1.5, 0.7],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Know the{' '}
            <span className="gradient-text text-shadow-glow">Truth</span>
            <br />
            <span className="text-4xl md:text-6xl">Fast.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI-powered fact verification for text, images, videos, and URLs. 
            Get instant truth scores with detailed analysis and source citations.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2 bg-matte-gray rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-neon-green" />
              <span className="text-sm">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2 bg-matte-gray rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-neon-cyan" />
              <span className="text-sm">99% Accurate</span>
            </div>
            <div className="flex items-center space-x-2 bg-matte-gray rounded-full px-4 py-2">
              <Bot className="w-5 h-5 text-neon-violet" />
              <span className="text-sm">AI-Powered</span>
            </div>
          </motion.div>

          <motion.button
            onClick={scrollToFactChecker}
            className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-neon-green to-neon-cyan text-matte-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-neon-cyan hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Check the Facts</span>
            <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;