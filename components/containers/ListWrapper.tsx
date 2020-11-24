import React from 'react';

const ListWrapper: React.FC = ({ children }) => {
  return <ul className="w-full">{children}</ul>;
};

export default ListWrapper;
