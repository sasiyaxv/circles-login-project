import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import Store from "../../src/store/storeConfiguration/Store";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Check if initial values and components are loaded", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
});
