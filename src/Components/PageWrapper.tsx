import * as React from "react";
import { Grid, Drawer, Divider } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  children?: React.ReactNode;
};

const drawerWidth = 60;

export default function PageWrapper({ children }: Props): JSX.Element {
  return (
    <React.Fragment>
      <Grid item xs={12} sx={{}}>
        {children}
      </Grid>
    </React.Fragment>
  );
}
