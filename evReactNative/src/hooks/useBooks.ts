import { useQuery } from "@tanstack/react-query";
import BooksClient from "../api/BooksClient";
import { AxiosError, CanceledError } from "axios";

type GetBooksResponse = {
  books: Book[];
};

export type Book = {
  title: string;
  authors: string[];
  key: string;
  firstPublishYear: number;
  subtitle: string;
};

const FIVE_SECONDS = 5000;

export const useBooks = (bookTitle: string) => {
  return useQuery({
    queryKey: ["books", bookTitle],
    queryFn: () => fetchBooks(bookTitle),
    enabled: !!bookTitle,
  });
};

export const fetchBooks = async (
  query: string,
): Promise<GetBooksResponse | undefined> => {
  const fieldsToFetch = "key,title,author_name,first_publish_year,subtitle";
  const bookLimit = 20;
  try {
    const response = await BooksClient.get("/search.json", {
      signal: newAbortSignal(FIVE_SECONDS), // This will be effectivly 10 seconds since we retry once,
      params: { q: query, fields: fieldsToFetch, limit: bookLimit },
    });
    const books: Book[] = response.data.docs.map(
      (book: any) =>
        ({
          title: book.title,
          authors: book.author_name ?? [],
          publish_date: book.first_publish_year,
          key: book.key,
          subtitle: book.subtitle,
          firstPublishYear: book.first_publish_year,
        } as Book),
    );
    return {
      books: books,
    };
  } catch (error) {
    if (error instanceof AxiosError && error instanceof CanceledError) {
      throw new Error("There seems to be an issue with your connection.");
    }
    throw new Error("There was an error fetching the books");
  }
};

function newAbortSignal(timeoutMs: number) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs);

  return abortController.signal;
}
