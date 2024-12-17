import React, { useEffect, useState } from 'react';
import { Book, Author } from './types';
import { getBooks, getAuthors } from './api';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { TabNavigation } from './components/TabNavigation';
import { AvailabilityTabs } from './components/AvailabilityTabs';
import { BookGrid } from './components/BookGrid';
import { AuthorGrid } from './components/AuthorGrid';

function App() {
  const [activeTab, setActiveTab] = useState<'books' | 'authors'>('books');
  const [availabilityFilter, setAvailabilityFilter] = useState<'available' | 'unavailable'>('available');
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        
        const [booksData, authorsData] = await Promise.all([
          getBooks(),
          getAuthors(),
        ]);

        if (!Array.isArray(booksData)) {
          throw new Error('Invalid books data received');
        }
        if (!Array.isArray(authorsData)) {
          throw new Error('Invalid authors data received');
        }

        setBooks(booksData);
        setAuthors(authorsData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Biblio Library</h1>
        
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <AvailabilityTabs 
          activeTab={availabilityFilter} 
          onTabChange={setAvailabilityFilter} 
        />

        {activeTab === 'books' ? (
          <BookGrid books={books} availabilityFilter={availabilityFilter} />
        ) : (
          <AuthorGrid authors={authors} availabilityFilter={availabilityFilter} />
        )}
      </div>
    </div>
  );
}

export default App;