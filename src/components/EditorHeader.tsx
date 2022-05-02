import React from "react";
import { View, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import icons from "../constants/icons";
import { SIZES } from "../constants/theme";
import ButtonIcon from "./ButtonIcon";

interface IEditorHeaderProps {
  onPressBack: () => void;
}

const EditorHeader: React.FC<IEditorHeaderProps> = ({ onPressBack }) => {
  return (
    <View
      style={styles.header}
    >
      <View
        style={styles.headerLeft}
      >
        <ButtonIcon
          size={22}
          icon={icons.arrow}
          style={styles.headerBackArrow}
          onPress={onPressBack}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.padding / 2
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row'
  },
  headerIcon: {
    width: 22,
    height: 22
  },
  headerBackArrow: {
    transform: [{ rotate: "180deg" }]
  },
})

export default EditorHeader;