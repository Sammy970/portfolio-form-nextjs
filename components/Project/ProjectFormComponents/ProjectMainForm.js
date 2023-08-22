import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const ProjectMainForm = ({ onSubmit }) => {
  const [numProject, setNumProject] = useState(1);
  const [projectData, setProjectData] = useState([]);

  const handleAddProject = () => {
    setNumProject(numProject + 1);
    setProjectData([
      ...projectData,
      {
        id: `fImage${numProject}`,
        mainImage: "",
        title: "",
        techUsed: [],
        desc: "",
        screenshot: "",
      },
    ]);
  };

  const handleRemoveProject = () => {
    if (numProject > 0) {
      setNumProject(numProject - 1);
      setProjectData(projectData.slice(0, numProject - 1));
    }
  };

  const handleAddTech = (index) => {
    const updatedData = [...projectData];
    updatedData[index].techUsed.push("");
    setProjectData(updatedData);
  };

  const handleRemoveTech = (index, techIndex) => {
    const updatedData = [...projectData];
    updatedData[index].techUsed.splice(techIndex, 1);
    setProjectData(updatedData);
  };

  const handleTechChange = (index, techIndex, value) => {
    const updatedData = [...projectData];
    updatedData[index].techUsed[techIndex] = value;
    setProjectData(updatedData);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedData = [...projectData];
    updatedData[index][field] = value;
    setProjectData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(projectData);
  };

  return (
    <VStack spacing={4} w={"full"} alignItems={"left"}>
      <Text>Project Details</Text>
      <HStack>
        <Button onClick={handleAddProject}>+</Button>
        <Button onClick={handleRemoveProject}>-</Button>
      </HStack>
      <Grid
        w={"full"}
        templateColumns={{ base: "auto", md: "auto auto" }}
        gap={10}
      >
        {projectData.map((exp, index) => (
          <Box key={exp.id}>
            <FormControl>
              <FormLabel>Main Image</FormLabel>
              <Input
                value={exp.mainImage}
                onChange={(e) =>
                  handleProjectChange(index, "mainImage", e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Project Title</FormLabel>
              <Input
                value={exp.title}
                onChange={(e) =>
                  handleProjectChange(index, "title", e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Technology Used</FormLabel>
              <VStack>
                {exp.techUsed.map((tech, techIndex) => (
                  <HStack key={techIndex}>
                    <Input
                      value={tech}
                      onChange={(e) =>
                        handleTechChange(index, techIndex, e.target.value)
                      }
                    />
                    <Button onClick={() => handleRemoveTech(index, techIndex)}>
                      -
                    </Button>
                  </HStack>
                ))}
                <Button onClick={() => handleAddTech(index)}>Add Tech</Button>
              </VStack>
            </FormControl>
            <FormControl>
              <FormLabel>Project Short Description</FormLabel>
              <Textarea
                value={exp.desc}
                onChange={(e) =>
                  handleProjectChange(index, "desc", e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Project Images</FormLabel>
              <Input
                value={exp.screenshot}
                onChange={(e) =>
                  handleProjectChange(index, "screenshot", e.target.value)
                }
              />
            </FormControl>
          </Box>
        ))}
      </Grid>
      <Button w={"30%"} m={"auto"} onClick={handleSubmit}>
        Submit
      </Button>
    </VStack>
  );
};

export default ProjectMainForm;
