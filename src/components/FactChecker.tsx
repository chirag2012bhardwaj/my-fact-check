import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Link as LinkIcon, Image, Video, Upload, Loader, CheckCircle } from 'lucide-react';
import FactResult from './FactResult';

type ContentType = 'text' | 'url' | 'image' | 'video';
type VerificationStatus = 'idle' | 'checking' | 'complete';

interface VerificationResult {
  verdict: 'TRUE' | 'FALSE' | 'PARTIAL';
  confidence: number;
  explanation: string;
  sources: string[];
  warnings?: string[];
}

const FactChecker: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ContentType>('text');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<VerificationStatus>('idle');
  const [result, setResult] = useState<VerificationResult | null>(null);

  const tabs = [
    { id: 'text' as ContentType, label: 'Text', icon: FileText },
    { id: 'url' as ContentType, label: 'URL', icon: LinkIcon },
    { id: 'image' as ContentType, label: 'Image', icon: Image },
    { id: 'video' as ContentType, label: 'Video', icon: Video },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setContent(file.name);
    }
  };

  const simulateFactCheck = async () => {
    setStatus('checking');
    setResult(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock result based on content
    const mockResults: VerificationResult[] = [
      {
        verdict: 'TRUE',
        confidence: 94,
        explanation: 'This statement has been verified against multiple reliable sources and appears to be factually accurate.',
        sources: ['Reuters', 'Associated Press', 'BBC News', 'Scientific American'],
      },
      {
        verdict: 'FALSE',
        confidence: 87,
        explanation: 'This claim contains significant inaccuracies and contradicts established facts from credible sources.',
        sources: ['Snopes', 'FactCheck.org', 'PolitiFact', 'National Geographic'],
        warnings: ['Contains manipulated information', 'Contradicts scientific consensus'],
      },
      {
        verdict: 'PARTIAL',
        confidence: 72,
        explanation: 'This statement contains some accurate information but also includes misleading or incomplete details.',
        sources: ['Wikipedia', 'Encyclopedia Britannica', 'CNN', 'The Guardian'],
        warnings: ['Context may be missing', 'Some details require verification'],
      },
    ];

    const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
    setResult(randomResult);
    setStatus('complete');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'text':
        return (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste the text you want to fact-check here..."
            className="w-full h-32 bg-matte-gray border border-gray-600 rounded-lg p-4 text-snow-white placeholder-gray-400 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-50 transition-all duration-300 resize-none"
          />
        );
      case 'url':
        return (
          <input
            type="url"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="https://example.com/article-to-verify"
            className="w-full bg-matte-gray border border-gray-600 rounded-lg p-4 text-snow-white placeholder-gray-400 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-50 transition-all duration-300"
          />
        );
      case 'image':
      case 'video':
        return (
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-neon-cyan transition-colors duration-300">
            <input
              type="file"
              accept={activeTab === 'image' ? 'image/*' : 'video/*'}
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">
                Click to upload {activeTab} or drag and drop
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {activeTab === 'image' ? 'PNG, JPG, WEBP up to 10MB' : 'MP4, MOV, AVI up to 100MB'}
              </p>
            </label>
            {content && (
              <p className="mt-4 text-neon-green">Selected: {content}</p>
            )}
          </div>
        );
    }
  };

  return (
    <section id="fact-checker" className="py-20 bg-matte-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fact Check <span className="gradient-text">Anything</span>
            </h2>
            <p className="text-xl text-gray-300">
              Verify information across multiple formats with our advanced AI system
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setContent('');
                    setResult(null);
                    setStatus('idle');
                  }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 mx-1 mb-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-neon-green to-neon-cyan text-matte-black font-semibold'
                      : 'bg-matte-black text-gray-400 hover:text-snow-white hover:bg-matte-gray'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content Input */}
            <div className="mb-8">
              {renderContent()}
            </div>

            {/* Check Button */}
            <div className="text-center">
              <motion.button
                onClick={simulateFactCheck}
                disabled={!content.trim() || status === 'checking'}
                className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-neon-green to-neon-cyan text-matte-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-neon-cyan hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                whileHover={{ scale: content.trim() && status !== 'checking' ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'checking' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Verify Truth</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Loading Animation */}
            <AnimatePresence>
              {status === 'checking' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8"
                >
                  <div className="scan-line bg-matte-black rounded-lg p-6">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-4 h-4 bg-neon-green rounded-full animate-pulse" />
                      <div className="w-4 h-4 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-4 h-4 bg-neon-violet rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <p className="text-center mt-4 text-gray-300">
                      AI analyzing content against {Math.floor(Math.random() * 1000) + 500} sources...
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results */}
            <AnimatePresence>
              {result && status === 'complete' && (
                <FactResult result={result} />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FactChecker;