import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

interface IEmptyProps {
  icon: any;
  message: string;
}

const Empty: React.FC<IEmptyProps> = ({ icon, message }) => {

  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        style={styles.icon}
      />
      <Text
        style={styles.text}
      >
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.padding,
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: COLORS.gray,
    marginBottom: SIZES.padding / 2
  },
  text: {
    fontSize: 20,
    color: COLORS.gray,
  }
});

export default Empty;