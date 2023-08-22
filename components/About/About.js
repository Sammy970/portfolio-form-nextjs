import {
  Container,
  FormControl,
  FormLabel,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Aboutme from "./AboutComponents/Aboutme";
import ExperienceForm from "./AboutComponents/ExperienceForm";
import EducationForm from "./AboutComponents/EducationForm";

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
          <Aboutme onSubmit={handleAboutMeSubmit} />
          <ExperienceForm onSubmit={handleExpSubmit} />
          <EducationForm onSubmit={handleEducationSubmit} />
        </VStack>
      </Container>
    </>
  );
};

export default About;
