import React, { useState } from 'react';
import { ArrowDown, Remove } from './icons';

interface Props {
  title: string;
  author: string;
  cover: string;
}

const BookCard: React.FC<Props> = ({ title, author, cover }) => {
  const [showSelectStatus, setShowSelectStatus] = useState(false);

  const renderStatusSelection = () => {
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
          src={cover}
          alt="placeholder img"
        />
      </div>
      <div className="w-4/6 h-full px-2 grid">
        {showSelectStatus && renderStatusSelection()}
        <div className="flex items-center justify-between">
          <span className="text-accent font-semibold capitalize">
            Lent to joe
          </span>
          <button
            onClick={() => setShowSelectStatus(!showSelectStatus)}
            className="p-2 z-20"
          >
            <ArrowDown className="fill-current text-accent" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-secondary pr-6 leading-5">
            {title}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-secondary text-sm">{author}</span>
          <button className="p-2">
            <Remove className="stroke-current text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
