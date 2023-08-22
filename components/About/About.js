import { Box, Container, Divider, Text, VStack } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import Aboutme from "./AboutFormComponents/AboutmeForm";
import ExperienceForm from "./AboutFormComponents/ExperienceForm";
import EducationForm from "./AboutFormComponents/EducationForm";

const About = () => {
  const [aboutMeData, setAboutMeData] = useState("");
  const [expData, setExpData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  const handleAboutMeSubmit = (aboutMeData) => {
    // console.log(aboutMeData);
    setAboutMeData(aboutMeData);
  };

  const handleExpSubmit = (experienceData) => {
    // console.log(experienceData);
    setExpData(experienceData);
  };

  const handleEducationSubmit = (educationData) => {
    // console.log(educationData);
    setEducationData(educationData);
  };

  return (
    <>
      <Container maxW={"full"}>
        <VStack w={"full"} spacing={4} mb={5}>
          <Text>About Form</Text>
          <Aboutme onSubmit={handleAboutMeSubmit} />
          <ExperienceForm onSubmit={handleExpSubmit} />
          <EducationForm onSubmit={handleEducationSubmit} />
        </VStack>

        <Divider mb={3} />

        <Text>Data Submitted</Text>
        <VStack w={"full"} gap={3}>
          <Text>{aboutMeData}</Text>
          <Box>
            {expData.map((exp) => (
              <Fragment key={exp.id}>
                <Text>{exp.year}</Text>
              </Fragment>
            ))}
          </Box>
          <Box>
            {educationData.map((edu) => (
              <Fragment key={edu.id}>
                <Text>{edu.year}</Text>
              </Fragment>
            ))}
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default About;
