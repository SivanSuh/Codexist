import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

test("button test", () => {
  render(<Button title="" />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(button).toBeInTheDocument();
});
