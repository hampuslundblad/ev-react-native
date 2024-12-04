import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const SearchInput = ({ placeholder, onChangeText }: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        inputMode="search"
        onSubmitEditing={e => {
          onChangeText(e.nativeEvent.text);
        }}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    elevation: 2,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default SearchInput;
