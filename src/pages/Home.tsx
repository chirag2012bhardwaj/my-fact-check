import React from 'react';
import BoltBadge from '../components/BoltBadge';
import Hero from '../components/Hero';
import FactChecker from '../components/FactChecker';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';


const Home: React.FC = () => {
  return (
    <div className=' relative w-full h-full'>
      <BoltBadge/>
      <Hero/>
      <FactChecker />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default Home;