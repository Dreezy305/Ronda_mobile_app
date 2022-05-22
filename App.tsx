import "react-native-gesture-handler";
import React from "react";
import { FONTS } from "./constants/theme";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// SCREENS
import SplashScreen from "./screens/SplashScreen";
import OnBoardingScreen from "./screens/OnBoardingScreen";
// import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import OtpScreen from "./screens/OtpScreen";
import DrawerScreen from "./navigations/DrawerNavigation";

const Stack: any = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts(FONTS);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerScreen"
          component={DrawerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
