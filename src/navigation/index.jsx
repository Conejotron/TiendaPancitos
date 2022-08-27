import { AuthScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Tabs from "./tabs";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);
  return <NavigationContainer>{userId ? <Tabs /> : <AuthScreen />}</NavigationContainer>;
};

export default AppNavigator;