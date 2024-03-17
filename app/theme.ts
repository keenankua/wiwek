"use client";

import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: "inherit",
  },
  palette: {
    mode: "dark",
  },
});

export default theme;
