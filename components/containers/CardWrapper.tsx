import React from 'react';

const CardWrapper: React.FC = ({ children }) => {
  return (
    <div className="grid gap-6 w-full h-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};

export default CardWrapper;
