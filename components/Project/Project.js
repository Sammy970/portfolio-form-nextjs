import { Container, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ProjectMainForm from "./ProjectFormComponents/ProjectMainForm";

const Project = () => {
  const handleProjectDataSubmit = (projectData) => {
    console.log(projectData);
  };

  return (
    <Container maxW={"full"}>
      <VStack w={"full"} spacing={4} mb={5}>
        <Text>Project Form</Text>
        <ProjectMainForm onSubmit={handleProjectDataSubmit} />
      </VStack>
    </Container>
  );
};

export default Project;
