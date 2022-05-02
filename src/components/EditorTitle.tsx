import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { FONTS } from "../constants/theme";

interface IEditorTitleProps {
  value: string;
  editable: boolean;
  onChangeText: (text: string) => void;
}

const EditorTitle: React.FC<IEditorTitleProps> = ({ value, editable, onChangeText }) => {
  return (
    <View
      style={styles.container}
    >
      <TextInput
        style={styles.textInput}
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        placeholder="Título"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  textInput: {
    ...FONTS.title
  }
})

export default EditorTitle;