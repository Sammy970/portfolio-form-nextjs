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
  VStack,
} from "@chakra-ui/react";

const ExperienceForm = ({ onSubmit }) => {
  const [numExperiences, setNumExperiences] = useState(1);
  const [experienceData, setExperienceData] = useState([]);

  const handleAddExperience = () => {
    setNumExperiences(numExperiences + 1);
    setExperienceData([
      ...experienceData,
      { id: `exp${numExperiences + 1}`, year: "", post: "", where: "" },
    ]);
  };

  const handleRemoveExperience = () => {
    if (numExperiences > 0) {
      setNumExperiences(numExperiences - 1);
      setExperienceData(experienceData.slice(0, numExperiences - 1));
    }
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedData = [...experienceData];
    updatedData[index][field] = value;
    setExperienceData(updatedData);
  };

  const handleSubmit = () => {
    onSubmit(experienceData);
  };

  return (
    <VStack spacing={4} w={"full"} alignItems={"left"}>
      <Text>Experience</Text>
      <HStack>
        <Button onClick={handleAddExperience}>+</Button>
        <Button onClick={handleRemoveExperience}>-</Button>
      </HStack>
      <Grid
        w={"full"}
        templateColumns={{ base: "auto", md: "auto auto" }}
        gap={10}
      >
        {experienceData.map((exp, index) => (
          <Box key={exp.id}>
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input
                value={exp.year}
                onChange={(e) =>
                  handleExperienceChange(index, "year", e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Post</FormLabel>
              <Input
                value={exp.post}
                onChange={(e) =>
                  handleExperienceChange(index, "post", e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Where</FormLabel>
              <Input
                value={exp.where}
                onChange={(e) =>
                  handleExperienceChange(index, "where", e.target.value)
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

export default ExperienceForm;
