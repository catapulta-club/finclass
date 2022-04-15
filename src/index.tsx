import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
};

export default App;
