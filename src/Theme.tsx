import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#f1f1f1",
    },
    text: {
      primary: "#212121",
    },
  },
  typography: {
    h1: {
      fontSize: "60px",
    },
    h3: {
      fontSize: "20px",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {},
        paper: {
          backgroundColor: "#f1f1f1",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f1f1f1",
          boxShadow: "none",
          borderBottom: "1px solid #E6E6E6",
        },
      },
    },
  },
});
