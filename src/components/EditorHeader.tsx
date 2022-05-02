import React from "react";
import { View, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import icons from "../constants/icons";
import { SIZES } from "../constants/theme";
import ButtonIcon from "./ButtonIcon";

interface IEditorHeaderProps {
  isKeyboardOpen: boolean;
  onPressBack: () => void;
  onPressUndo: () => void;
  onPressRedo: () => void;
}

const EditorHeader: React.FC<IEditorHeaderProps> = ({ isKeyboardOpen,  onPressBack, onPressRedo, onPressUndo }) => {

  return (
    <View
      style={styles.header}
    >
      <View
        style={styles.headerLeft}
      >
        <TouchableOpacity
          onPress={onPressBack}
        >
          <View>
            <Image
              source={icons.arrow}
              resizeMode="contain"
              style={[
                styles.headerIcon,
                styles.headerBackArrow
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={styles.headerRight}
      >
        {
          isKeyboardOpen ? (
            <>
              <ButtonIcon
                icon={icons.undo}
                onPress={onPressUndo}
                size={22}
              />
              <ButtonIcon
                icon={icons.undo}
                onPress={onPressRedo}
                size={22}
                style={styles.headerRedoIcon}
              />
            </>
          )
          :
          (
            <>
              <ButtonIcon
                icon={icons.theme}
                onPress={() => { }}
                size={22}
              />
              <ButtonIcon
                icon={icons.menu}
                onPress={() => { }}
                size={22}
                style={styles.headerLastIcon}
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
    justifyContent: "space-between",
    padding: SIZES.padding / 2
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row'
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  headerIcon: {
    width: 22,
    height: 22
  },
  headerLastIcon: {
    marginLeft: SIZES.padding
  },
  headerBackArrow: {
    transform: [{ rotate: "180deg" }]
  },
  headerRedoIcon: {
    transform: [{ rotateY: "-180deg" }],
    marginLeft: SIZES.padding
  },
})

export default EditorHeader;