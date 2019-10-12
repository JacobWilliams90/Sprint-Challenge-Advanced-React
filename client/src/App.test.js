import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App.js";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  rtl.render(<App />);
});

it("Dark Mode Button On screen", () => {
  const { getByText } = rtl.render(<App />);
  getByText("Dark Mode Toggle");
});

it("Button toggles and sets Dark Mode", () => {
  const { getByText, getByTestId } = rtl.render(<App />);
  rtl.fireEvent.click(getByText("Dark Mode Toggle"));
  expect(getByTestId("button")).toHaveClass("toggled");
});
