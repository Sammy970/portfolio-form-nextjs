import React, { useState } from "react";
import InputProject from "./InputProject";
import {
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
      <About />

      {/* <Grid w={"full"} gap={6} templateColumns={"auto auto auto"}>
        <GridItem>
          <InputProject />
        </GridItem>
      </Grid> */}
    </>
  );
};

export default FormOne;
