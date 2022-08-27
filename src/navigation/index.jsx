import React, { useState } from "react";

import { AuthScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./tabs";

const AppNavigator = () => {
  const [userId, setUserId] = useState(null);
  return (
    <NavigationContainer>
      {userId ? <Tabs /> : <AuthScreen setUserId={setUserId} />}
    </NavigationContainer>
  );
};

export default AppNavigator;