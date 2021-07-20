import { fireEvent, render, screen } from "@testing-library/react";
import { LoginWrapper } from "../components/page-components/loginWrapper";

test("Check if initial values and components are loaded", () => {
  render(<LoginWrapper />);

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

  expect(loginButton).toHaveStyle({ backgroundColor: "#495464" });
});

test("Check functionality of page", () => {
  render(<LoginWrapper />);
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
});
