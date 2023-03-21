import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabs } from "./BottomTabs";

import { Home } from "..//pages/Home";
import { Teste } from "../pages/Teste";
import { Volei } from "../pages/Volei";

const AppStack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="Home">

      <AppStack.Screen
        options={{ headerShown: false }}
        name="BottomTabs"
        component={BottomTabs}
      />
    </AppStack.Navigator>
  );
}
