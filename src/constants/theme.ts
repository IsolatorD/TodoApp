import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: '#27ae60',
  secondary: '#bdc3c7',
  tertiary: '#ecf0f1',
  error: '#e74c3c',
  success: '#27ae60',
  black: '#000000',
  gray: '#7f8c8d',
  white: '#ffffff',
}

export const SIZES = {
  base: 8,
  padding: 30,
  // fonts
  title: 28,
  subtitle: 18,
  body: 16,
  small: 12,
  // App sizes
  width,
  height,
}

export const FONTS = {
  title: { fontSize: SIZES.title, fontFamily: 'Poppints-Bold', lineHeight: 40 },
  subtitle: { fontSize: SIZES.subtitle, fontFamily: 'Poppints-Medium', lineHeight: 30 },
  body: { fontSize: SIZES.body, fontFamily: 'Poppints-Regular', lineHeight: 22 },
  small: { fontSize: SIZES.small, fontFamily: 'Poppints-Regular', lineHeight: 20 },
}

export default { COLORS, SIZES, FONTS };