import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import lock from "./../../../assets/icons/lock/icon.png";
import {
  Container,
  Content,
  Header,
  LockIcon,
  OptionRightHeader,
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Separator height={20} />
      <Header>
        <BackButton onPress={() => {}} />
        <OptionRightHeader>
          <Text size={13}>Recuperar Senha</Text>
          <Separator width={10} />
          <LockIcon source={lock} />
        </OptionRightHeader>
      </Header>
    </Container>
  );
};

export default Login;
