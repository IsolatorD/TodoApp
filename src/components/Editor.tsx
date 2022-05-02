import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { FONTS } from "../constants/theme";

interface IEditorProps {
  value: string;
  editable: boolean;
  onChangeText: (text: string) => void;
}

const Editor: React.FC<IEditorProps> = ({ value, editable, onChangeText }) => {
  return (
    <View
      style={styles.container}
    >
      <TextInput
        style={styles.textInput}
        value={value}
        editable={editable}
        onChangeText={onChangeText}
        multiline={true}
        numberOfLines={20}
        placeholder="Empiece a escribir"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  textInput: {
    ...FONTS.body,
    textAlignVertical: "top",
    // flex: 1,
    // borderWidth: 1,
  }
})

export default Editor;