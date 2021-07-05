import "./App.css";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
import theme from "@rebass/preset";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">test</div>
    </ThemeProvider>
  );
}

export default App;
