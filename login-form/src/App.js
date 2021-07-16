import "./App.css";
import React, { useContext } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import { Routes } from "./Routes";

function App() {
  // const MyContext = useContext(TestContext);
  return (
    <ThemeProvider theme={theme}>
      {/* separation of concerns
      separate file for routes.
      create a const file and put paths there.
      Put base url also in the const file
      Single responsibility 
      Create different file for fetch. 
      Wrapper components.
      Create different component for headings
      Different component for headings
      containers inside containers use reusable components
      */}
      <Routes />
    </ThemeProvider>
  );
}

export default App;
