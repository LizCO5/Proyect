const API_URL = 'https://biblio-api-drab.vercel.app';

export async function getBooks(): Promise<Book[]> {
  const response = await fetch(`${API_URL}/books`);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
}

export async function getAuthors(): Promise<Author[]> {
  const response = await fetch(`${API_URL}/authors`);
  if (!response.ok) {
    throw new Error('Failed to fetch authors');
  }
  return response.json();
}