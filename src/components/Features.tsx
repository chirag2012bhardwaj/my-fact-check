import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Brain, Globe, Clock, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get verification results in seconds with our optimized AI pipeline',
      color: 'neon-green',
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Your data is encrypted and never stored on our servers',
      color: 'neon-cyan',
    },
    {
      icon: Brain,
      title: 'Advanced AI',
      description: 'Powered by latest language models and computer vision technology',
      color: 'neon-violet',
    },
    {
      icon: Globe,
      title: 'Global Sources',
      description: 'Cross-reference against thousands of trusted international sources',
      color: 'neon-green',
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Stay current with breaking news and evolving information',
      color: 'neon-cyan',
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Backed by journalists, researchers, and fact-checking organizations',
      color: 'neon-violet',
    },
  ];

  return (
    <section className="py-20 bg-matte-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built for the future of information verification with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${
                  feature.color === 'neon-green' ? 'from-neon-green to-green-400' :
                  feature.color === 'neon-cyan' ? 'from-neon-cyan to-blue-400' :
                  'from-neon-violet to-purple-400'
                }`}>
                  <feature.icon className="w-6 h-6 text-matte-black" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-snow-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;