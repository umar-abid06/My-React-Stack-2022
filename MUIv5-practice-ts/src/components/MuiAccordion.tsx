import { ExpandCircleDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const MuiAccordion = () => {
  const [expanded, setExpanded] = React.useState<false | string>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandCircleDown />}
        >
          <Typography variant="h5">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis mollitia accusantium tempore atque. Nostrum atque
            cupiditate mollitia vel dolores aut ipsum provident. Eius quisquam
            optio quidem dolorum, sed quas in?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel12-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandCircleDown />}
        >
          <Typography variant="h5">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis mollitia accusantium tempore atque. Nostrum atque
            cupiditate mollitia vel dolores aut ipsum provident. Eius quisquam
            optio quidem dolorum, sed quas in?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandCircleDown />}
        >
          <Typography variant="h5">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis mollitia accusantium tempore atque. Nostrum atque
            cupiditate mollitia vel dolores aut ipsum provident. Eius quisquam
            optio quidem dolorum, sed quas in?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
