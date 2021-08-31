import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../app/store";
import App from "../App";

test("Check if initial values and components are loaded", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
