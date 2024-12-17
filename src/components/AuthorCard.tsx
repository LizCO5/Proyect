import { Author } from '../types';

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  const booksList = Array.isArray(author.books) ? author.books : [];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src="https://web.gcapworld.com/web_images/parul.png"
        alt={author.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{author.name}</h3>
        <p className="text-gray-600 mb-2">Nationality: {author.nationality}</p>
        <p className="text-gray-500 mb-2">Birth Year: {author.birth_year}</p>
        <div>
          <h4 className="font-medium mb-1">Books:</h4>
          {booksList.length > 0 ? (
            <ul className="list-disc list-inside text-gray-600">
              {booksList.map((book, index) => (
                <li key={index}>{book}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No books available</p>
          )}
        </div>
      </div>
    </div>
  );
}