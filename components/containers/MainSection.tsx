import React from 'react';

const MainSection: React.FC = ({ children }) => {
  return (
    <main className="flex justify-center min-h-screen pt-24 pb-16 px-6">
      {children}
    </main>
  );
};

export default MainSection;
