import React, { useEffect } from "react";
import { Image, StyleSheet, Text } from "react-native"
import Container from "../components/Container";
import images from "../constants/images";
import { COLORS, FONTS } from "../constants/theme";
import { useTask } from "../hooks/useTask";
import { SplashScreenProps } from "../interfaces/navigator";

const SplashScreen:React.FC<SplashScreenProps> = ({ navigation }) => {
  const { loading } = useTask();

  useEffect(() => {
    setTimeout(() => {
      if (loading) return;
      navigation.navigate("HomeScreen");
    }, 1000);
  })

  return (
    <Container centered>
      <Image
        source={images.logo}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text
        style={styles.title}
      >
        Task Manager
      </Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    ...FONTS.title,
    color: COLORS.success
  },
  logo: {
    width: 120,
    height: 120
  }
})

export default SplashScreen;