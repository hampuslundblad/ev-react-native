import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import SearchBooksScreen from "../src/screens/SearchBooksScreen";
import { RouteProp } from "@react-navigation/native";
import { expect, it, describe, jest } from "@jest/globals";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchBooksScreenProps, StackParamList } from "../src/types/routes";
import { useBooks } from "../src/hooks/useBooks";

type NavigationType = NativeStackNavigationProp<
  StackParamList,
  "SearchBooks",
  undefined
>;

jest.mock("../src/hooks/useBooks");

const createTestProps = (): unknown & SearchBooksScreenProps => ({
  navigation: {
    navigate: jest.fn(),
  } as unknown as NavigationType,
  route: {} as unknown as RouteProp<StackParamList, "SearchBooks">,
});

let props: unknown & SearchBooksScreenProps = createTestProps();

describe("SearchBooksScreen", () => {
  it("renders search input and heading correctly", () => {
    (useBooks as jest.Mock).mockReturnValue({
      data: { books: [] },
      isLoading: true,
      isError: false,
      error: null,
    });

    render(<SearchBooksScreen {...props} />);
    expect(screen.getByPlaceholderText("Search for books...")).toBeTruthy();
    expect(screen.getByText("Explore new books!")).toBeTruthy();
  });

  it("displays loading indicator when books are loading", () => {
    (useBooks as jest.Mock).mockReturnValue({
      data: { books: [] },
      isLoading: true,
      isError: false,
      error: null,
    });
    render(<SearchBooksScreen {...props} />);
    expect(screen.getByTestId("activity-indicator")).toBeTruthy();
  });

  it("displays error notification when there is an error", () => {
    const errorMessage = "Network error";
    (useBooks as jest.Mock).mockReturnValue({
      data: { books: [] },
      isLoading: false,
      isError: true,
      error: { message: errorMessage },
    });
    render(<SearchBooksScreen {...props} />);
    expect(screen.getByText(errorMessage)).toBeTruthy();
  });

  it("displays no books found notification when no books match search", () => {
    (useBooks as jest.Mock).mockReturnValue({
      data: { books: [] },
      isLoading: false,
      isError: false,
      error: null,
    });
    render(<SearchBooksScreen {...props} />);
    fireEvent.changeText(
      screen.getByPlaceholderText("Search for books..."),
      "Nonexistent Book",
    );
    expect(
      screen.getByText("No books found named Nonexistent Book"),
    ).toBeTruthy();
  });

  it("navigates to book details screen when a book is pressed", () => {
    const book = { key: "1", title: "Test Book", authors: ["Author One"] };
    (useBooks as jest.Mock).mockReturnValue({
      data: { books: [book] },
      isLoading: false,
      isError: false,
      error: null,
    });
    render(<SearchBooksScreen {...props} />);
    fireEvent.press(screen.getByText("Test Book"));
    expect(props.navigation.navigate).toHaveBeenCalledWith("BookDetails", {
      book,
    });
  });
});
