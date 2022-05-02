import React from "react";
import { StatusBar } from "react-native";
import { COLORS } from "./src/constants/theme";
import { TaskProvider } from "./src/context/task";
import AppNavigator from "./src/navigators/app";

const App:React.FC = () => {

  return (
    <TaskProvider>
      <StatusBar backgroundColor={COLORS.primary} />
      <AppNavigator />
    </TaskProvider>
  )
}

export default App;