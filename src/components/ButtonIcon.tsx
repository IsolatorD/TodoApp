import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/theme";

interface IButtonIconProps {
  icon: any;
  size: number;
  iconColor?: string;
  style?: any;
  onPress: () => void;
}

const ButtonIcon: React.FC<IButtonIconProps> = ({ icon, size, iconColor, style, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={style}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={[
            styles.icon,
            {
              width: size,
              height: size,
              tintColor: iconColor
            }
          ]}
        />
      </View>
    </TouchableOpacity>
  );
}

ButtonIcon.defaultProps = {
  size: 20,
  iconColor: COLORS.black,
  style: {}
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  }
})

export default ButtonIcon;