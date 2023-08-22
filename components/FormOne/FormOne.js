import React, { useState } from "react";
import InputProject from "./InputProject";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Textarea,
} from "@chakra-ui/react";
import About from "../About/About";

const FormOne = () => {
  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                About Me Form
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <About />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Project Form
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <About />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FormOne;
