import React from "react";
import { useTheme } from "styled-components";
import Text from "./components/Text";
import Button from "./components/Button";
import { Container } from "./styles";
import Separator from "./components/Separator";
import BackButton from "./components/BackButton";
import Dots from "./components/Dots";
import Input from "./components/Input";

const App: React.FC = () => {
  return (
    <Container>
      <Separator height={20} />
      <BackButton />
      <Separator height={20} />
      <Dots amount={10}></Dots>
      <Text>Hello</Text>
      <Dots amount={10}></Dots>
      <Input name="Email" error="N tem Email" />
      <Separator height={20} />
      <Input secureTextEntry name="Senha" error="N tem Email" />
      <Button textType="bold" title="Assine Agora"></Button>
    </Container>
  );
};

export default App;
