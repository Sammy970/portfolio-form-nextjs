import {
  Button,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Aboutme = ({ onSubmit }) => {
  const [aboutMeData, setAboutMeData] = useState("");

  const handleAboutMeDataChange = (event) => {
    setAboutMeData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(aboutMeData);
  };

  return (
    <VStack spacing={4} w={"full"} alignItems={"left"}>
      <FormControl>
        <Text>About Me</Text>
        <Textarea
          placeholder="Here is a sample placeholder"
          size="sm"
          resize={"vertical"}
          value={aboutMeData}
          onChange={handleAboutMeDataChange}
        />
      </FormControl>
      <Button w={"30%"} m={"auto"} onClick={handleSubmit}>
        Submit
      </Button>
    </VStack>
  );
};

export default Aboutme;
