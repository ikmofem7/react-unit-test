import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const element = screen.getByRole("button", { name: /change to blue/i });
  expect(element).toHaveStyle(`background-color: red`);
  expect(element).toHaveStyle({ backgroundColor: "red" });
});

test("button turn blue when clicked", () => {
  render(<App />);
  const element = screen.getByRole("button", { name: /change to blue/i });

  // click event in virtal dom
  fireEvent.click(element);
  expect(element).toHaveStyle({ backgroundColor: "blue" });
  expect(element.textContent).toMatch(/change to red/i);
});

test("initial conditions", () => {
  render(<App />);
  const element = screen.getByRole("button", { name: /change to blue/i });
  expect(element).toBeEnabled();
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("diable button via checkbox", () => {
  render(<App />);
  const element = screen.getByRole("button", { name: /change to blue/i });
  expect(element).toBeEnabled();
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkBox).not.toBeChecked();
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(element).toBeDisabled();
  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(element).toBeEnabled();
});

test("diable button via checkbox and gray it out", () => {
  render(<App />);
  // get element and initial state
  const element = screen.getByRole("button", { name: /change to blue/i });
  expect(element).toBeEnabled();
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkBox).not.toBeChecked();
  fireEvent.click(checkBox);
  // after check box selected
  expect(checkBox).toBeChecked();
  expect(element).toBeDisabled();
  expect(element).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkBox);
  // unchecking checkbox
  expect(checkBox).not.toBeChecked();
  expect(element).toBeEnabled();
  expect(element).toHaveStyle({ backgroundColor: "red" });
  // button click and color to blue
  fireEvent.click(element);
  expect(element.textContent).toMatch(/change to red/i);
  expect(element).toHaveStyle({ backgroundColor: "blue" });
  // disable button
  fireEvent.click(checkBox);
  expect(element).toBeDisabled();
  expect(element).toHaveStyle({ backgroundColor: "gray" });
  // enable button
  fireEvent.click(checkBox);
  expect(element).toBeEnabled();
  expect(element).toHaveStyle({ backgroundColor: "blue" });
});
