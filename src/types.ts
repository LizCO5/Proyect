export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  description: string;
  available: boolean;
}

export interface Author {
  id: number;
  name: string;
  nationality: string;
  birth_year: number;
  books: string[];
  available: boolean;
}