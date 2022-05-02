import React from "react";
import { Image, StyleSheet } from "react-native";
import images from "../constants/images";

interface ILogoProps {
  size?: number;
}

const Logo:React.FC<ILogoProps> = ({ size }) => {
  const sizeLogo = size || 120;

  return (
    <Image
      source={images.logo}
      style={[styles.logo, { width: sizeLogo, height: sizeLogo }]}
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120
  }
})

export default Logo;