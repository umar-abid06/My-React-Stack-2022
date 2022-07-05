import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component={"h1"} gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
        provident! Atque suscipit officiis laudantium blanditiis eum repellat
        delectus! Fugit nam soluta quisquam dolorem eum, enim in iste distinctio
        expedita! Odit.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
        autem officiis reiciendis minus aperiam assumenda sit voluptatibus
        dolore doloremque doloribus? Assumenda porro, cum quas odit similique
        aliquam eligendi eaque labore?
      </Typography>
    </div>
  );
};

export default MuiTypography;
