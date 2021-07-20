import { render, screen } from "@testing-library/react";
import { Dashboard } from "../components/page-components/dashboard";

test("Check if initial values and components are loaded", () => {
  render(<Dashboard />);

  const mainHeader = screen.getByRole("heading", {
    name: "Hello! I see you got through the login",
  });
  expect(mainHeader).toBeInTheDocument();

  const infoHeader = screen.getByRole("heading", {
    name: "Information",
  });
  expect(infoHeader).toBeInTheDocument();
});
