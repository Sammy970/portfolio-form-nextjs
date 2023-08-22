import { Container, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";
import Aboutme from "./AboutComponents/Aboutme";
import ExperienceForm from "./AboutComponents/ExperienceForm";

const About = () => {
  const handleExpSubmit = (experienceData) => {
    // You can use the experienceData here, for example, to update state or send to another app.
    console.log(experienceData);
  };

  const handleAboutMeSubmit = (aboutMeData) => {
    console.log(aboutMeData);
  };

  return (
    <>
      <Container maxW={"full"}>
        <Aboutme onSubmit={handleAboutMeSubmit} />
        <ExperienceForm onSubmit={handleExpSubmit} />
      </Container>
    </>
  );
};

export default About;
