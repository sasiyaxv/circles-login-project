import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/page-components/Login";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Check if initial values and components are loaded", () => {
  render(<App />);

  // render(<Login />);
});
