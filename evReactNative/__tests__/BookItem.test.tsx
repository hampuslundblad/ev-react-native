import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import BookItem from "../src/components/BookItem";
import { expect, it, describe, jest } from "@jest/globals";

const props = {
  title: "Test Book Title",
  authors: ["Author One", "Author Two"],
};

describe("BookItem", () => {
  it("renders the title and the first author", () => {
    render(
      <BookItem
        title={props.title}
        authors={props.authors}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(screen.getByText("Test Book Title")).toBeTruthy();
    expect(screen.getByText("Author One")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();

    render(
      <BookItem
        title={props.title}
        authors={props.authors}
        onPress={onPressMock}
      />,
    );

    fireEvent.press(screen.getByText("Test Book Title"));
    expect(onPressMock).toHaveBeenCalled();
  });
});
