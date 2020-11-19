import React from 'react';
import { GridView, ListView, ArrowDown } from './icons/';

const Toolbar: React.FC = () => {
  return (
    <div className="h-8 z-50 px-6 w-full flex items-center justify-between bg-white shadow-md">
      <div className="h-full w-1/3 flex items-center justify-start">
        <button>
          <GridView className="fill-current text-secondary" />
        </button>
        <button className="ml-6">
          <ListView className="fill-current text-secondary opacity-25" />
        </button>
      </div>
      <div className="h-full w-1/3 flex items-center justify-center">
        <button className="uppercase flex items-center">
          <span className="mr-3 text-secondary text-lg font-medium">
            sort by
          </span>
          <ArrowDown className="fill-current text-secondary" />
        </button>
      </div>
      <div className="h-full w-1/3 flex items-center justify-end">
        <button className="uppercase flex items-center">
          <span className="mr-3 text-secondary text-lg font-medium">
            filters
          </span>
          <ArrowDown className="fill-current text-secondary" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
