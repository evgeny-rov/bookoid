import React from 'react';
import { Book, Settings, User, Home } from './icons';

const Appbar: React.FC = () => {
  return (
    <div className="fixed bottom-0 z-50 flex items-center justify-between h-8 w-full bg-primary-light shadow-md-reverse md:hidden">
      <button className="w-1/4 h-full grid place-items-center">
        <Home className="fill-current text-secondary" />
      </button>
      <button className="w-1/4 h-full grid place-items-center">
        <User className="fill-current text-secondary" />
      </button>
      <button className="w-1/4 h-full grid place-items-center">
        <Book className="fill-current text-secondary" />
      </button>
      <button className="w-1/4 h-full grid place-items-center">
        <Settings className="fill-current text-secondary" />
      </button>
    </div>
  );
};

export default Appbar;
