import * as React from "react";
import { Grid, Typography } from "@mui/material";

export default function FrontPage() {
  return (
    <Grid
      item
      xs={12}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        padding: "30px",
        backgroundColor: "#f1f1f1",
        boxShadow:
          "inset 26px 26px 48px -26px rgba(98, 98, 98, 0.16), inset -32px -32px 43px -26px rgba(255, 255, 255, 0.64);",
      }}
    >
      <Typography variant="h1">
        Hello!
        <br /> I'm Marie Thoresen
      </Typography>
      <Typography variant="h3">UX/UI designer</Typography>
    </Grid>
  );
}
