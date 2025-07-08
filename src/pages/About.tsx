import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Globe, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10M+', label: 'Facts Verified', icon: Shield },
    { number: '99.2%', label: 'Accuracy Rate', icon: Award },
    { number: '500+', label: 'Trusted Sources', icon: Globe },
    { number: '50K+', label: 'Active Users', icon: Users },
  ];

  const team = [
    {
      name: 'CHIRAG BHARDWAJ',
      role: 'CSE Student',
      hobbies: 'Exploring Tech. and Innovation',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-matte-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">FactLens</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We're on a mission to combat misinformation and empower people with 
              the tools they need to verify truth in our digital age.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-neon-green" />
                <span>Founded 2024</span>
              </div>
              <div className="w-1 h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-neon-cyan" />
                <span>AI-Powered</span>
              </div>
              <div className="w-1 h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-neon-violet" />
                <span>Global Impact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-matte-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan">
                      <stat.icon className="w-6 h-6 text-matte-black" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-matte-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                In an era of information overload, we believe everyone deserves access to truth. 
                FactLens combines cutting-edge AI technology with rigorous fact-checking 
                methodologies to create a more informed society.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-neon-green mr-3" />
                  <h3 className="text-2xl font-bold">Trust & Accuracy</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Our AI models are trained on millions of verified sources and 
                  continuously updated to maintain the highest accuracy standards. 
                  We partner with leading fact-checking organizations worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-neon-cyan mr-3" />
                  <h3 className="text-2xl font-bold">Innovation</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We leverage the latest advances in natural language processing, 
                  computer vision, and machine learning to analyze content across 
                  multiple formats and languages with unprecedented speed.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-matte-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience 
              in AI, journalism, and technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-matte-black" />
                </div>
                <h3 className="text-xl font-bold text-snow-white mb-2">
                  {member.name}
                </h3>
                <p className="text-neon-cyan font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.hobbies}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-matte-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Fight Against <span className="gradient-text">Misinformation</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a community that values truth and accuracy. 
              Start fact-checking today and help build a more informed world.
            </p>
            <motion.button
              className="bg-gradient-to-r from-neon-green to-neon-cyan text-matte-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-neon-cyan hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Fact-Checking Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;