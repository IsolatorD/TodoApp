import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import icons from "../constants/icons";
import { FONTS, COLORS, SIZES } from "../constants/theme";
import ButtonIcon from "./ButtonIcon";
import Logo from "./logo";

interface IHeaderProps {
  viewMode: boolean;
  isOpenTaskSelector: boolean;
  onPressViewMode: () => void;
  onPressStatistics: () => void;
  onPressSelectAll: () => void;
  onPressClose: () => void;
}

const Header: React.FC<IHeaderProps> = ({ viewMode, isOpenTaskSelector, onPressViewMode, onPressSelectAll, onPressClose, onPressStatistics }) => {
  return (
    <View style={styles.header}>
      {
        isOpenTaskSelector ? (
          <>
            <ButtonIcon
              size={18}
              icon={icons.close}
              onPress={onPressClose}
            />
            <Text style={styles.title2}>Seleccionar elementos</Text>
          </>
        )
        :
        (
          <>
            <Logo size={35}/>
            <Text style={styles.title}>Note Manager</Text>
          </>
        )
      }
      <View
        style={styles.actions}
      >
        {
          isOpenTaskSelector ? (
            <ButtonIcon
              size={22}
              icon={icons.selectAll}
              onPress={onPressSelectAll}
            />
          )
          :
          (
            <>
              <ButtonIcon
                size={22}
                icon={icons.statistics}
                onPress={onPressStatistics}
                style={styles.statisticsButton}
              />
              <ButtonIcon
                size={22}
                icon={viewMode ? icons.grid : icons.list}
                onPress={onPressViewMode}
              />
            </>   
          )
        }
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
  title2: {
    ...FONTS.subtitle,
    color: COLORS.black,
    marginLeft: 20,
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  viewModeIcon: {
    width: 25,
    height: 25
  },
  statisticsButton: {
    marginRight: 20
  }
})

export default Header;