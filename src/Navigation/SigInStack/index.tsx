import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Access from "../../pages/Access";

// import {Container} from './styles'
const Stack = createNativeStackNavigator();

const SignInStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="access" component={Access} />
    </Stack.Navigator>
  );
};

export default SignInStack;
