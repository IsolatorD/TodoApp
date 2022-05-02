import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import icons from "../constants/icons";
import { COLORS } from "../constants/theme";

interface IFabProps {
  icon: any;
  onPress: () => void;
}

const Fab: React.FC<IFabProps> = ({ icon, onPress }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={styles.fab}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={styles.fabIcon}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 2
  },
  fabIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white
  }
})

export default Fab;