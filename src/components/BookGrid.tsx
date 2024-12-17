import { Book } from '../types';
import { BookCard } from './BookCard';

interface BookGridProps {
  books: Book[];
  availabilityFilter: 'available' | 'unavailable';
}

export function BookGrid({ books, availabilityFilter }: BookGridProps) {
  const filteredBooks = books.filter(book => 
    availabilityFilter === 'available' ? book.available : !book.available
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}