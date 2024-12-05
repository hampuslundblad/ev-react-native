import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Book } from "../hooks/useBooks";

export type StackParamList = {
  SearchBooks: undefined;
  BookDetails: { book: Book };
};

export type SearchBooksScreenProps = NativeStackScreenProps<
  StackParamList,
  "SearchBooks"
>;

export type BookDetailsScreenProps = NativeStackScreenProps<
  StackParamList,
  "BookDetails"
>;
