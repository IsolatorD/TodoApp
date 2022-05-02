import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  SplashScreen,
  StatisticsScreen,
  TaskDetailsScreen,
  TaskEditorScreen
} from '../screens'
import { DEFAULT_NAVIGATOR_OPTIONS } from "../constants/navigator";
import { AppNavigatorParamsList } from "../interfaces/navigator";

const Stack = createNativeStackNavigator<AppNavigatorParamsList>();

const AppNavigator:React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={DEFAULT_NAVIGATOR_OPTIONS}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="TaskEditorScreen"
          component={TaskEditorScreen}
          options={{
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen
          name="TaskDetailsScreen"
          component={TaskDetailsScreen}
          options={{
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen
          name="StatisticsScreen"
          component={StatisticsScreen}
          options={{
            animation: 'slide_from_right'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;