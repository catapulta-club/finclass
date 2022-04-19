import React from "react";
import { View } from "react-native";
import Step from "./localComponents/Step";

import { Container } from "./styles";
import { Props } from "./types";

const Steps = ({ index }: Props) => {
  return (
    <Container>
      <Step isActive={index === 0}></Step>
      <Step isActive></Step>
      <Step isActive></Step>
    </Container>
  );
};

export default Steps;
