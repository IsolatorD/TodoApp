import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

interface IContainerProps {
  children: React.ReactNode;
  centered?: boolean;
}

const Container: React.FC<IContainerProps> = ({ centered, children }) => {

  return (
    <SafeAreaView
      style={[
        styles.container,
        centered && styles.centered
      ]}
    >
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  }
})

export default Container;