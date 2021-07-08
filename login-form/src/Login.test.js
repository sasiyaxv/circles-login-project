import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "./components/page-components/Login";
import axios from "axios";

test("Check if initial values and components are loaded", () => {
  render(<Login />);

  const mainHeader = screen.getByRole("heading", {
    name: "Ready to take a challenge?",
  });
  expect(mainHeader).toBeInTheDocument();

  const secondHeader = screen.getByRole("heading", {
    name: "Login to pick a challenge",
  });
  expect(secondHeader).toBeInTheDocument();

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
  expect(loginButton).toBeEnabled();

  //   fireEvent.click(loginButton);
  //   expect
});

test("Check functionality of page", () => {
  render(<Login />);
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
});
