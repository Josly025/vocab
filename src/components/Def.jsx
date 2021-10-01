import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
//
import History from "./History";
////
///
export default function Def({ search }) {
  ////ss
  console.log(search + "this is new");
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  {/* {search.hwi.hw} */}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  $4.50
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              {/* {search.shortDef[0]}
              {search.shortDef[1]}
              {search.shortDef[2]} */}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}>
            <Typography color="text.secondary" variant="body2">
              {/* {search.quotes[0]}
              {search.quotes[1]}
              {search.quotes[2]} */}
            </Typography>
            <Typography gutterBottom variant="body1">
              Select type
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="Extra Soft" />
              <Chip color="primary" label="Soft" />
              <Chip label="Medium" />
              <Chip label="Hard" />
            </Stack>
          </Box>
          <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            <Button>Add to cart</Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <History />
      </Grid>
    </Grid>
  );
}
