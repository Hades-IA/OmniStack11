import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Incidents from "./pages/incidents/index";
import Details from "./pages/details/index";

export default function Roures(){
  return(
<NavigationContainer>

<AppStack.Navigator screenOptions={{ headerShown: false }} >
<AppStack.Screen name="incidents" component={Incidents} />
<AppStack.Screen name="details" component={Details} />
</AppStack.Navigator>

</NavigationContainer>
  )
}