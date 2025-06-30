import React from 'react';

const BoltBadge: React.FC = () => {
  return (
    <div className="absolute top-5 right-5 w-24 h-24 z-50 cursor-pointer transition-opacity duration-300 hover:opacity-60">
      <a
      href='https://bolt.new'
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full cursor-pointer transition-opacity duration-300 hover:opacity-60"
      >
        <img
        src="/public/bolt.svg" // Confirm this matches your file structure
        alt="Bolt Badge"
        className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
};

export default BoltBadge;

