import React from 'react';

interface Props {
  title: string;
  author: string;
  cover: string;
}

const BookListView: React.FC<Props> = ({ title, author, cover }) => {
  return (
    <li className="h-14 w-full flex justify-start items-center border-b p-1 border-secondary">
      <div className="h-10 w-10 rounded-md overflow-hidden mr-4">
        <img
          className="object-cover h-full w-full"
          src={cover}
          alt="book cover"
        />
      </div>
      <div className="grid">
        <span>{title}</span>
        <span>{author}</span>
      </div>
    </li>
  );
};

export default BookListView;
