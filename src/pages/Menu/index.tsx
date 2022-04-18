import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components";
import Separator from "../../components/Separator";
import Text from "../../components/Text";

import Bitcoin from "../../../assets/icons/badge_ulrich.png";
import editProfileIcon from "../../../assets/icons/edit-profile/edit-profile.png";
import progressIcon from "../../../assets/icons/progress/progress.png";
import subscriptionIcon from "../../../assets/icons/subscription/subscription.png";
import helpIcon from "../../../assets/icons/help/help.png";
import termsIcon from "../../../assets/icons/terms/terms.png";

import ListTile from "./localComponents/ListTile/";
import Button from "../../components/Button";

import {
  Avatar,
  Container,
  ContainerEarnedItem,
  Divider,
  EarnedItemLogo,
  IconTile,
  ProfileContainer,
} from "./styles";

const Menu: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ScrollView>
        <Separator height={20} />
        <ProfileContainer>
          <Avatar
            source={{
              uri: "https://avatars.githubusercontent.com/u/28990749?v=4",
            }}
          />
          <Separator height={20} />
          <Text size={22} type="bold">
            Ismael
          </Text>
          <Separator height={40} />
          <Text size={12} type="bold" color={colors.placeholder.main}>
            Minhas conquistas
          </Text>
        </ProfileContainer>
        <Separator height={20} />
        <ContainerEarnedItem>
          <EarnedItemLogo source={Bitcoin} />
          <Separator height={10} />
          <Text size={11} color={colors.placeholder.main} numberOfLines={1}>
            Investidor do Futuro
          </Text>
        </ContainerEarnedItem>
        <Separator height={20} />
        <Divider />
        <Separator height={30} />
        <Text size={12} type="bold" color={colors.placeholder.main}>
          Conta
        </Text>
        <Separator height={15} />
        <ListTile
          onPress={() => {}}
          title="Editar conta"
          icon={<IconTile source={editProfileIcon} />}
        />
        <ListTile
          onPress={() => {}}
          title="Meu Progresso"
          icon={<IconTile source={progressIcon} />}
        />
        <ListTile
          onPress={() => {}}
          title="Plano de Assinatura"
          icon={<IconTile source={subscriptionIcon} />}
        />
        <Separator height={30} />
        <Text size={12} type="bold" color={colors.placeholder.main}>
          Ajustes
        </Text>
        <Separator height={15} />
        <ListTile
          onPress={() => {}}
          title="Configurações do aplicativo"
          icon={<IconTile source={editProfileIcon} />}
        />
        <Separator height={30} />
        <Text size={12} type="bold" color={colors.placeholder.main}>
          Mais
        </Text>
        <Separator height={15} />
        <ListTile
          onPress={() => {}}
          title="Central de ajuda"
          icon={<IconTile source={helpIcon} />}
        />
        <ListTile
          onPress={() => {}}
          title="Política de Privacidade"
          icon={<IconTile source={termsIcon} />}
        />
        <Separator height={30} />
        <Button textType="bold" outlined title="Sair" onPress={() => {}} />
        <Separator height={30} />
        <Text size={11} type="bold" color={colors.placeholder.main}>
          Finclass 1.3.0
        </Text>
      </ScrollView>
    </Container>
  );
};

export default Menu;
