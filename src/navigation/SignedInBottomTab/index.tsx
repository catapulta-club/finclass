import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import home from "../../../assets/icons/home.png";
import download from "../../../assets/icons/download.png";
import boxsearch from "../../../assets/icons/boxsearch.png";
import boxmenu from "../../../assets/icons/boxmenu.png";
import Text from "../../components/Text";

import Access from "../../pages/Access";

import { Icon } from "./styles";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

const SignedInBottomTab: React.FC = () => {
  const { colors } = useTheme();

  const handleSizeTo80Percentage = (size: number) => size * 0.8;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.background.onMain,
        tabBarInactiveTintColor: colors.background.main,
        tabBarStyle: {
          backgroundColor: colors.backdrop.main,
          borderTopColor: colors.backdrop.main,
        },
        header: () => null,
      }}
    >
      <Tab.Screen
        name="home"
        component={Access}
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={home}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text type="bold" size={8} color={color}>
              Início
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="downloads"
        component={Access}
        options={{
          title: "Downloads",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={download}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text type="bold" size={8} color={color}>
              Início
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Access}
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={boxsearch}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text type="bold" size={8} color={color}>
              Início
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={Access}
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={boxmenu}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text type="bold" size={8} color={color}>
              Início
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default SignedInBottomTab;
