import React from "react";
import { render, screen } from "@testing-library/react-native";
import BookItem from "../src/components/BookItem";
import { expect, it, describe } from "@jest/globals";

describe("BookItem", () => {
  it("renders the title and the first author", () => {
    const title = "Test Book Title";
    const authors = ["Author One", "Author Two"];

    render(<BookItem title={title} authors={authors} />);

    expect(screen.getByText("Test Book Title")).toBeTruthy();
    expect(screen.getByText("Author One")).toBeTruthy();
  });
});
