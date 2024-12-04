import { useQuery } from "@tanstack/react-query";
import BooksClient from "../api/BooksClient";

type GetBooksResponse = {
  books: Book[];
};

export type Book = {
  title: string;
  authors: string[];
  publishDate: string;
  key: string;
};

export const useBooks = (bookTitle: string) => {
  return useQuery({
    queryKey: ["books", bookTitle],
    queryFn: () => fetchBooks(bookTitle),
    enabled: !!bookTitle,
  });
};

export const fetchBooks = async (query: string): Promise<GetBooksResponse> => {
  const response = await BooksClient.get("/search.json", {
    params: { q: query, fields: "key,title,author_name", limit: 5 },
  });

  const books = response.data.docs.map((book: any) => ({
    title: book.title,
    authors: book.author_name,
    publish_date: book.first_publish_year,
    key: book.key,
  }));
  return {
    books: books,
  };
};
