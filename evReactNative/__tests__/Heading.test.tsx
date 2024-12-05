import React from "react";
import { render, screen } from "@testing-library/react-native";
import Heading from "../src/components/Heading";
import { describe, expect, it } from "@jest/globals";

describe("Heading component", () => {
  it("renders correctly with small size", () => {
    render(<Heading size="small">Small Heading</Heading>);
    const heading = screen.getByText("Small Heading");
    expect(heading.props.style).toMatchObject({ fontSize: 16 });
  });

  it("renders correctly with medium size", () => {
    render(<Heading size="medium">Medium Heading</Heading>);
    const heading = screen.getByText("Medium Heading");
    expect(heading.props.style).toMatchObject({ fontSize: 20 });
  });

  it("renders correctly with large size", () => {
    render(<Heading size="large">Large Heading</Heading>);
    const heading = screen.getByText("Large Heading");
    expect(heading.props.style).toMatchObject({ fontSize: 24 });
  });
});
