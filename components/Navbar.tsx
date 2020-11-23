import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="w-full h-12 px-6 flex items-center justify-between bg-primary-light shadow-md">
      <button className="h-full text-secondary">Bookoid</button>
    </nav>
  );
};

export default NavBar;
