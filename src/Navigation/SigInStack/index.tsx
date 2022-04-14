import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Access from "../../pages/Access";

const Stack = createNativeStackNavigator();

const SignInStack: React.FC = () => {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="access" component={Access} />
    </Stack.Navigator>
  );
};

export default SignInStack;
