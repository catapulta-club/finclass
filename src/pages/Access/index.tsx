import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import Separator from "../../components/Separator";
import banner from "../../../assets/images/banner/image.png";
import { useTheme } from "styled-components";
import emailIcon from "../../../assets/icons/email.png";
import { Banner, Container, Content, EmailIcon, ImpactPhrase } from "./styles";

const Access: React.FC = () => {
  return (
    <Container>
      <Banner resizeMode="contain" source={banner} />
      <Content>
        <ImpactPhrase type="bold">
          {`Aprendaa a investir e\nconquiste sua liberdade\nfinanceira`}
        </ImpactPhrase>
      </Content>
    </Container>
  );
};

export default Access;
