import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [toggle, setToggle] = useState(false);
  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(!toggle);
  };
  console.log({ toggle });
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={toggle} onChange={handleSwitch} />}
      />
    </Box>
  );
};

export default MuiSwitch;
