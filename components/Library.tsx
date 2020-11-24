import React from 'react';
import CardWrapper from './containers/CardWrapper';
import ListWrapper from './containers/ListWrapper';
import BookCardItem from './BookCardItem';
import BookListItem from './BookListItem';

interface Props {
  renderGridView: boolean;
}

const bookDataMock = {
  title: 'Long book title with lots of words',
  author: 'Book Author',
  cover: '/static/cover-placeholder.jpg',
};

const books: Array<typeof bookDataMock> = new Array(10).fill(bookDataMock);

const Library: React.FC<Props> = ({ renderGridView }) => {
  const Wrapper = renderGridView ? CardWrapper : ListWrapper;
  const BookItem = renderGridView ? BookCardItem : BookListItem;

  return (
    <Wrapper>
      {books.map(({ title, author, cover }, idx) => (
        <BookItem key={idx} title={title} author={author} cover={cover} />
      ))}
    </Wrapper>
  );
};

export default Library;
