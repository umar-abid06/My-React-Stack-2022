import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{ border: "1px " }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "100px",
            height: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          NED UET
        </Box>
        <Box
          display="flex"
          width="100px"
          height="100px"
          bgcolor="success.light"
          p={2}
        >
          Software Engineering
        </Box>
      </Stack>
      <Grid container my={3}>
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            // width="260px"
            height="150px"
            bgcolor="success.light"
            p={2}
          >
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            // width="260px"
            height="150px"
            bgcolor="success.light"
            p={2}
          >
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            // width="260px"
            height="150px"
            bgcolor="success.light"
            p={2}
          >
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            // width="260px"
            height="150px"
            bgcolor="success.light"
            p={2}
          >
            Item 1
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
