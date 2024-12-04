import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import SearchInput from "../src/components/SearchInput";
import { describe, expect, it, jest } from "@jest/globals";

describe("SearchInput", () => {
  it("renders correctly with given placeholder", () => {
    render(
      <SearchInput
        placeholder="Search here..."
        value=""
        onChangeText={() => {}}
      />,
    );
    expect(screen.getByPlaceholderText("Search here...")).toBeTruthy();
  });

  it("calls onChangeText with the correct value when submitted", () => {
    const handleChangeText = jest.fn();
    render(
      <SearchInput
        placeholder="Search here..."
        value=""
        onChangeText={handleChangeText}
      />,
    );
    const input = screen.getByPlaceholderText("Search here...");
    fireEvent(input, "onSubmitEditing", { nativeEvent: { text: "test" } });
    expect(handleChangeText).toHaveBeenCalledWith("test");
  });
});
