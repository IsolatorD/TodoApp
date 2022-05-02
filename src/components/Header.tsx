import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import icons from "../constants/icons";
import { FONTS, COLORS, SIZES } from "../constants/theme";
import Logo from "./logo";

interface IHeaderProps {
  viewMode: boolean;
  onPressViewMode: () => void;
}

const Header: React.FC<IHeaderProps> = ({ viewMode, onPressViewMode }) => {
  return (
    <View style={styles.header}>
      <Logo size={35}/>
      <Text style={styles.title}>Task Manager</Text>
      <View
        style={styles.actions}
      >
        <TouchableOpacity onPress={onPressViewMode}>
          <View>
            <Image
              source={viewMode ? icons.grid : icons.list}
              resizeMode="contain"
              style={styles.viewModeIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.padding / 2,
  },
  title: {
    ...FONTS.subtitle,
    color: COLORS.success,
    marginLeft: 10,
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  viewModeIcon: {
    width: 25,
    height: 25
  }
})

export default Header;