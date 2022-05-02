import React, { useEffect } from "react";
import { Image, StyleSheet, Text } from "react-native"
import Container from "../components/Container";
import images from "../constants/images";
import { COLORS, FONTS } from "../constants/theme";
import { SplashScreenProps } from "../interfaces/navigator";

const SplashScreen:React.FC<SplashScreenProps> = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 2000);
  }, [])

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
        Note Manager
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