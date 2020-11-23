import React from 'react';

const Header: React.FC = ({ children }) => {
  return <header className="fixed z-50 top-0 w-full">{children}</header>;
};

export default Header;
