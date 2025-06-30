import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, ExternalLink, Share2, Bookmark } from 'lucide-react';

interface VerificationResult {
  verdict: 'TRUE' | 'FALSE' | 'PARTIAL';
  confidence: number;
  explanation: string;
  sources: string[];
  warnings?: string[];
}

interface FactResultProps {
  result: VerificationResult;
}

const FactResult: React.FC<FactResultProps> = ({ result }) => {
  const getVerdictIcon = () => {
    switch (result.verdict) {
      case 'TRUE':
        return <CheckCircle className="w-8 h-8 text-neon-green" />;
      case 'FALSE':
        return <XCircle className="w-8 h-8 text-neon-red" />;
      case 'PARTIAL':
        return <AlertTriangle className="w-8 h-8 text-yellow-400" />;
    }
  };

  const getVerdictColor = () => {
    switch (result.verdict) {
      case 'TRUE':
        return 'neon-border-green';
      case 'FALSE':
        return 'neon-border-red';
      case 'PARTIAL':
        return 'border-2 border-yellow-400 shadow-[0_0_10px_#fbbf24]';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-neon-green';
    if (confidence >= 60) return 'text-yellow-400';
    return 'text-neon-red';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8"
    >
      <div className={`${getVerdictColor()} rounded-2xl p-6 bg-matte-black`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {getVerdictIcon()}
            <div>
              <h3 className="text-2xl font-bold">
                {result.verdict}
              </h3>
              <p className={`text-lg font-semibold ${getConfidenceColor(result.confidence)}`}>
                {result.confidence}% Confidence
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg bg-matte-gray hover:bg-gray-600 transition-colors" aria-label='Share'>
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-matte-gray hover:bg-gray-600 transition-colors" aria-label='Bookmark'>
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Confidence Score</span>
            <span className={`text-sm font-semibold ${getConfidenceColor(result.confidence)}`}>
              {result.confidence}%
            </span>
          </div>
          <div className="w-full bg-matte-gray rounded-full h-2">
            <motion.div
              className={`h-2 rounded-full ${
                result.confidence >= 80 ? 'bg-neon-green' :
                result.confidence >= 60 ? 'bg-yellow-400' : 'bg-neon-red'
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${result.confidence}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>

        {/* Explanation */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-snow-white">Analysis</h4>
          <p className="text-gray-300 leading-relaxed">
            {result.explanation}
          </p>
        </div>

        {/* Warnings */}
        {result.warnings && result.warnings.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-400 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Warnings
            </h4>
            <ul className="space-y-2">
              {result.warnings.map((warning, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sources */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-snow-white">
            Sources ({result.sources.length})
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {result.sources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between bg-matte-gray rounded-lg p-3 hover:bg-gray-600 transition-colors group cursor-pointer"
              >
                <span className="text-gray-300 group-hover:text-snow-white transition-colors">
                  {source}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-neon-cyan transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FactResult;