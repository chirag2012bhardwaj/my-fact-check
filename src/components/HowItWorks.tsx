import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Search, Brain, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Submit Content',
      description: 'Upload text, images, videos, or paste URLs for verification',
      color: 'neon-green',
    },
    {
      icon: Search,
      title: 'AI Analysis',
      description: 'Our AI scans millions of sources and cross-references information',
      color: 'neon-cyan',
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Advanced algorithms analyze context, bias, and factual accuracy',
      color: 'neon-violet',
    },
    {
      icon: CheckCircle,
      title: 'Get Results',
      description: 'Receive detailed verification with confidence scores and sources',
      color: 'neon-green',
    },
  ];

  return (
    <section className="py-20 bg-matte-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simple process, powerful results - verify any content in four easy steps
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-1">
                <div className={`glass-effect rounded-2xl p-8 ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                }`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${
                      step.color === 'neon-green' ? 'from-neon-green to-green-400' :
                      step.color === 'neon-cyan' ? 'from-neon-cyan to-blue-400' :
                      'from-neon-violet to-purple-400'
                    }`}>
                      <step.icon className="w-8 h-8 text-matte-black" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-400 mb-1">
                        Step {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-snow-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-full border-4 ${
                  step.color === 'neon-green' ? 'border-neon-green bg-neon-green' :
                  step.color === 'neon-cyan' ? 'border-neon-cyan bg-neon-cyan' :
                  'border-neon-violet bg-neon-violet'
                } bg-opacity-20 flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-snow-white">
                    {index + 1}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-transparent mx-auto mt-4" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;