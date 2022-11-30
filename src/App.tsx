import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";
import { CssBaseline } from "@mui/material";
import Router from "./Components/Router";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router />
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
