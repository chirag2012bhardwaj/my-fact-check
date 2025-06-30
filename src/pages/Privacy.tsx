import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';

const Privacy: React.FC = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Your data is encrypted in transit and at rest using military-grade encryption.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly explain what data we collect and how we use it.',
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Privacy considerations are built into every feature from the ground up.',
    },
    {
      icon: UserCheck,
      title: 'User Control',
      description: 'You have full control over your data and can delete it at any time.',
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
              Privacy & <span className="gradient-text">Ethics</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is fundamental to our mission. Learn how we protect your data 
              and maintain the highest ethical standards in AI fact-checking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Our <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These core principles guide every decision we make about data handling and user privacy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan mr-4">
                    <principle.icon className="w-6 h-6 text-matte-black" />
                  </div>
                  <h3 className="text-xl font-bold text-snow-white">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling */}
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
                How We Handle Your <span className="gradient-text">Data</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-neon-green bg-opacity-20">
                    <Database className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Data Collection</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We only collect data that is necessary for providing our fact-checking services:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Content you submit for verification (temporarily processed, then deleted)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Basic usage analytics to improve our services (anonymized)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Account information if you choose to create an account (optional)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-neon-cyan bg-opacity-20">
                    <Lock className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Data Security</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We implement industry-leading security measures to protect your information:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>End-to-end encryption for all data transmission</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Zero-knowledge architecture - we can't see your content</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Regular security audits and penetration testing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Ethics */}
      <section className="py-20 bg-matte-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI <span className="gradient-text">Ethics</span>
              </h2>
              <p className="text-xl text-gray-300">
                Our commitment to responsible AI development and deployment.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-full bg-yellow-400 bg-opacity-20">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Important Limitations</h3>
                  <div className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      While our AI systems are highly advanced, they are not infallible. We want to be transparent about their limitations:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span>AI may misinterpret context, sarcasm, or nuanced information</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Emerging or very recent events may not be fully captured in our training data</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Complex political or controversial topics require human expertise</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Always cross-reference important information with multiple sources</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-20 rounded-lg">
                      <p className="text-yellow-400 font-semibold">
                        FactLens is a tool to assist in fact-checking, not a replacement for critical thinking and independent verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
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
              Questions About <span className="gradient-text">Privacy</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're committed to transparency. If you have any questions about our 
              privacy practices or data handling, we're here to help.
            </p>
            <motion.button
              className="bg-gradient-to-r from-neon-green to-neon-cyan text-matte-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-neon-cyan hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Privacy Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;