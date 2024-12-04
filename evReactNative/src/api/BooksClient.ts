import axios from "axios";

export const BooksClient = axios.create({
  baseURL: "https://openlibrary.org",
});

export default BooksClient;
