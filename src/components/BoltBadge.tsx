import React from 'react';
import boltIcon from '../assets/bolt.svg';

const BoltBadge: React.FC = () => {
  return (
    <div className="absolute top-5 right-5 w-20 h-20 z-50 cursor-pointer transition-opacity duration-300 hover:opacity-60">
      <a
        href='https://bolt.new'
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full cursor-pointer transition-opacity duration-300 hover:opacity-60"
      >
        <img
          src={boltIcon} // Confirm this matches your file structure
          alt="Bolt Badge"
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
};

export default BoltBadge;

