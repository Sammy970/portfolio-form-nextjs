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

const EducationForm = ({ onSubmit }) => {
  const [numEducation, setNumEducation] = useState(1);
  const [educationData, setEducationData] = useState([]);

  const handleAddEducation = () => {
    setNumEducation(numEducation + 1);
    setEducationData([
      ...educationData,
      {
        id: `edu${numEducation}`,
        year: "",
        branchName: "",
        collegeName: "",
        image: "",
      },
    ]);
  };

  const handleRemoveEducation = () => {
    if (numEducation > 0) {
      setNumEducation(numEducation - 1);
      setEducationData(educationData.slice(0, numEducation - 1));
    }
  };

  const handleEducationChange = (index, field, value) => {
    const updatedData = [...educationData];
    updatedData[index][field] = value;
    setEducationData(updatedData);
  };

  const handleSubmit = () => {
    onSubmit(educationData);
  };

  return (
    <VStack spacing={4} w={"full"} alignItems={"left"}>
      <Text>Education Details</Text>
      <HStack>
        <Button onClick={handleAddEducation}>+</Button>
        <Button onClick={handleRemoveEducation}>-</Button>
      </HStack>
      <Grid
        w={"full"}
        templateColumns={{ base: "auto", md: "auto auto" }}
        gap={10}
      >
        {educationData.map((exp, index) => (
          <Box key={exp.id}>
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input
                value={exp.year}
                onChange={(e) =>
                  handleEducationChange(index, "year", e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Branch Name</FormLabel>
              <Input
                value={exp.branchName}
                onChange={(e) =>
                  handleEducationChange(index, "branchName", e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>College Name</FormLabel>
              <Input
                value={exp.collegeName}
                onChange={(e) =>
                  handleEducationChange(index, "collegeName", e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Institution Image</FormLabel>
              <Input
                value={exp.image}
                onChange={(e) =>
                  handleEducationChange(index, "image", e.target.value)
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

export default EducationForm;
