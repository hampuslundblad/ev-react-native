import React from "react";
import { render, screen } from "@testing-library/react-native";

// Note: import explicitly to use the types shipped with jest.
import { expect, it, jest } from "@jest/globals";

import App from "../App";

// Reactotron is only used for debugging, so we mock it out.
jest.mock("../ReactotronConfig.js", () => jest.fn());

it("renders correctly", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Search for books...")).toBeTruthy();
});
