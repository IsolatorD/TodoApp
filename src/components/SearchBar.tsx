import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import icons from "../constants/icons";
import { COLORS, FONTS, SIZES } from "../constants/theme";


interface ISearchBar {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<ISearchBar> = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <Image
        source={icons.search}
        style={styles.searchIcon}
      />
      <View style={styles.searchInput}>
        <TextInput
          placeholder="Buscar notas"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    paddingHorizontal: SIZES.padding / 2,
    marginHorizontal: SIZES.padding / 1.2,
    marginVertical: SIZES.base,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: COLORS.gray,
  },
  searchInput: {
    flex: 1,
  },
  input: {
    color: COLORS.gray
  },
})

export default SearchBar;