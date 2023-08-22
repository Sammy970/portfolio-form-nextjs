import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

const InputProject = () => {
  const [projectCount, setProjectCount] = useState("1");
  const [projectData, setProjectData] = useState([]);

  const handleProjectCountChange = (valueString) => {
    setProjectCount(valueString);
    const newData = new Array(Number(valueString)).fill({ name: "" });
    setProjectData(newData);
  };

  const handleProjectNameChange = (index, value) => {
    const newData = [...projectData];
    newData[index] = { name: value };
    setProjectData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(projectData);
    console.log("Form submitted");
  };

  const projectFields = projectData.map((project, index) => (
    <FormControl key={index}>
      <FormLabel>Project {index + 1}</FormLabel>
      <Input
        type="text"
        value={project.name}
        onChange={(e) => handleProjectNameChange(index, e.target.value)}
      />
    </FormControl>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>No. of Projects</FormLabel>
      <NumberInput
        min={1}
        max={5}
        onChange={handleProjectCountChange}
        value={projectCount}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      {projectFields}

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default InputProject;
