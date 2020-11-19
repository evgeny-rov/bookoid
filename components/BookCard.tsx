import React, { useState } from 'react';
import { ArrowDown, Remove } from './icons';

const BookCard: React.FC = () => {
  const [showSelectStatus, setShowSelectStatus] = useState(false);

  const renderPopup = () => {
    return (
      <div className="absolute right-0 w-4/6 h-full pt-8 pr-3 flex flex-col items-end bg-gradient-to-l from-white z-10">
        <button className="text-accent font-semibold text-sm">Read</button>
        <button className="text-accent font-semibold text-sm">Reading</button>
        <button className="text-accent font-semibold text-sm">Lent</button>
        <button className="text-accent font-semibold text-sm">Stock</button>
      </div>
    );
  };

  return (
    <div className="relative w-full h-32 flex rounded-custom shadow-md overflow-hidden bg-primary-light">
      <div className="relative w-2/6 h-full">
        <div className="absolute h-full w-full top-0 bg-gradient-to-l from-primary-light"></div>
        <img
          className="h-full w-full object-cover object-center"
          src="/static/cover-placeholder.jpg"
          alt="placeholder img"
        />
      </div>
      <div className="w-4/6 h-full px-3 grid">
        {showSelectStatus && renderPopup()}
        <div className="flex items-center justify-between">
          <span className="text-accent font-semibold capitalize">
            Lent to Joe
          </span>
          <button
            onClick={() => setShowSelectStatus(!showSelectStatus)}
            className="absolute right-0 p-2 pr-3 z-20"
          >
            <ArrowDown className="fill-current text-accent" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-secondary pr-6 leading-5">
            Harry Potter and Philosopher's stone.
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-secondary text-sm">
            J. K. Rowling
          </span>
          <button className="absolute right-0 p-2 pr-3">
            <Remove className="stroke-current text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
