import React, { useEffect, useState } from "react";
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
export default function Def({ searchWord }) {
  const [searchResult, setSearchResult] = useState("");
  ////
  console.log(searchWord + " this is line 16");
  useEffect(() => {
    const apiKey = "4b1af027-4755-46c5-a06a-66de442e4bd7";
    fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchWord}?key=${apiKey}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setSearchResult(result[0]);
          console.log(result[0], " this is Result in api");
        },
        (error) => {
          console.log(error);
        }
      );
  }, [searchWord]);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  {/* {searchResult.meta.id} */}
                  {console.log(searchResult)}
                </Typography>
              </Grid>
              <Grid item>
                {/* <Typography gutterBottom variant="p" component="div">
                  1) {searchResult.shortdef[0]}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  2) {searchResult.shortdef[1]}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  3) {searchResult.shortdef[2]}
                </Typography> */}
              </Grid>
            </Grid>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}>
            <Typography color="text.secondary" variant="body2">
              {/* {searchResult.quotes[0]}
              {searchResult.quotes[1]} */}
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
        </Box>
      </Grid>
      <Grid item xs={6}>
        <History />
      </Grid>
    </Grid>
  );
}
