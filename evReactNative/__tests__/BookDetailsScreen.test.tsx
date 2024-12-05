import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import BookDetailsScreen from "../src/screens/BookDetailsScreen";
import { RouteProp } from "@react-navigation/native";
import { expect, it, describe, jest } from "@jest/globals";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BookDetailsScreenProps, StackParamList } from "../src/types/routes";

type NavigationType = NativeStackNavigationProp<
  StackParamList,
  "BookDetails",
  undefined
>;

const mockParams = {
  params: {
    book: {
      title: "Test Book",
      authors: ["Author One", "Author Two"],
      subtitle: "Test Subtitle",
      firstPublishYear: 2021,
    },
  },
};

const createTestProps = (): unknown & BookDetailsScreenProps => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  } as unknown as NavigationType,
  route: mockParams as unknown as RouteProp<StackParamList, "BookDetails">,
});

let props: unknown & BookDetailsScreenProps = createTestProps();

describe("BookDetailsScreen", () => {
  it("renders book details correctly", () => {
    render(<BookDetailsScreen {...props} />);
    expect(screen.getByText("Test Book")).toBeTruthy();
    expect(screen.getByText("Authors:")).toBeTruthy();
    expect(screen.getByText("Author One, Author Two")).toBeTruthy();
    expect(screen.getByText("Subtitle:")).toBeTruthy();
    expect(screen.getByText("Test Subtitle")).toBeTruthy();
    expect(screen.getByText("First publish year:")).toBeTruthy();
    expect(screen.getByText("2021")).toBeTruthy();
  });

  it("calls navigation.goBack when button is pressed", () => {
    render(<BookDetailsScreen {...props} />);
    const button = screen.getByText("Go back to search");
    fireEvent.press(button);
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
