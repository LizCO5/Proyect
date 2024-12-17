import { Author } from '../types';
import { AuthorCard } from './AuthorCard';

interface AuthorGridProps {
  authors: Author[];
  availabilityFilter: 'available' | 'unavailable';
}

export function AuthorGrid({ authors, availabilityFilter }: AuthorGridProps) {
  const filteredAuthors = authors.filter(author => 
    availabilityFilter === 'available' ? author.available : !author.available
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredAuthors.map((author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  );
}