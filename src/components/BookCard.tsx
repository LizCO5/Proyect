import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src="https://img.freepik.com/premium-vector/book-icons-flat-design-style_611881-693.jpg?w=740"
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-2">By {book.author}</p>
        <p className="text-gray-500 mb-2">Year: {book.year}</p>
        <p className="text-gray-500 mb-2">Genre: {book.genre}</p>
        <p className="text-gray-700 line-clamp-3">{book.description}</p>
      </div>
    </div>
  );
}