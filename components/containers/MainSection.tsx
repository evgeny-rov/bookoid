import React from 'react';

const MainSection: React.FC = ({ children }) => {
  return (
    <main className="h-full w-full p-6 pb-12 overflow-y-auto">{children}</main>
  );
};

export default MainSection;
