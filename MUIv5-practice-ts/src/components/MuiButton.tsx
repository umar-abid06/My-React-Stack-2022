import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatBold,
  FormatItalic,
  FormatItalicOutlined,
  FormatUnderlined,
} from "@mui/icons-material";
const MuiButton = () => {
  const [formats, setFormats] = useState<string[] | null>([]);
  console.log({ formats });

  const handleFormatsChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[] | null
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" color="primary">
          Text
        </Button>
        <Button variant="text" color="secondary">
          Text
        </Button>
        <Button variant="text" color="warning">
          Text
        </Button>
        <Button variant="text" color="error">
          Text
        </Button>
        <Button variant="text" color="info">
          Text
        </Button>
        <Button variant="text" color="success">
          Text
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          Text
        </Button>
        <Button variant="contained" color="secondary">
          Text
        </Button>
        <Button variant="contained" color="warning">
          Text
        </Button>
        <Button variant="contained" color="error">
          Text
        </Button>
        <Button variant="contained" color="info">
          Text
        </Button>
        <Button variant="contained" color="success">
          Text
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="outlined" color="primary">
          Text
        </Button>
        <Button variant="outlined" color="secondary">
          Text
        </Button>
        <Button variant="outlined" color="warning">
          Text
        </Button>
        <Button variant="outlined" color="error">
          Text
        </Button>
        <Button variant="outlined" color="info">
          Text
        </Button>
        <Button variant="outlined" color="success">
          Text
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction={"row"}>
        <Button variant="text" size="small">
          Text
        </Button>
        <Button variant="contained" size="medium">
          Contained
        </Button>
        <Button variant="outlined" size="large">
          Outlined
        </Button>
      </Stack>
      <Stack display="block" direction={"row"} spacing={2}>
        <Button
          variant="text"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Clicked")}
        >
          SEND
        </Button>
        <Button variant="outlined" endIcon={<SendIcon />} disableElevation>
          SEND
        </Button>
        <IconButton aria-label="send" color="secondary" size="large">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          aria-label="Button alignment group"
          variant="contained"
          orientation="vertical"
          size="large"
          color="success"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatsChange}
          color="error"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underline">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
