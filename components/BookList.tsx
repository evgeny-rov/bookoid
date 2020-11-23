import BookCard from './BookCard';

const BookList: React.FC = () => {
  return (
    <div className="grid gap-6 w-full h-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};

export default BookList;
