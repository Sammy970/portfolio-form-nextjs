import {
  Container,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Aboutme from "./AboutFormComponents/AboutmeForm";
import ExperienceForm from "./AboutFormComponents/ExperienceForm";
import EducationForm from "./AboutFormComponents/EducationForm";

const About = () => {
  const handleAboutMeSubmit = (aboutMeData) => {
    console.log(aboutMeData);
  };

  const handleExpSubmit = (experienceData) => {
    // You can use the experienceData here, for example, to update state or send to another app.
    console.log(experienceData);
  };

  const handleEducationSubmit = (educationData) => {
    console.log(educationData);
  };

  return (
    <>
      <Container maxW={"full"}>
        <VStack w={"full"} spacing={4}>
          <Text>About Form</Text>
          <Aboutme onSubmit={handleAboutMeSubmit} />
          <ExperienceForm onSubmit={handleExpSubmit} />
          <EducationForm onSubmit={handleEducationSubmit} />
        </VStack>
      </Container>
    </>
  );
};

export default About;
