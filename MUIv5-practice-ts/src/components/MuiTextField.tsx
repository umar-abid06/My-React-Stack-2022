import { RemoveRedEyeRounded } from "@mui/icons-material";
import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Password"
          color="success"
          variant="filled"
          size="small"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText="Enter a valid password"
          error={!value}
        />
        <TextField
          label="Required Password"
          required
          disabled
          type={"password"}
          helperText="Please type a password of standard!"
        />
        <TextField
          label="Read Only"
          helperText="Please type a password of standard!"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Credential"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <RemoveRedEyeRounded />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
