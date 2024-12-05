import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { BookDetailsScreenProps } from "../types/routes";
import Heading from "../components/Heading";

function BookDetailsScreen({ navigation, route }: BookDetailsScreenProps) {
  const book = route.params.book;
  return (
    <View style={styles.container}>
      <Heading size="large">{book.title}</Heading>
      <Text style={styles.label}>Authors:</Text>
      <Text>{book.authors.join(", ")}</Text>
      {book.subtitle && (
        <>
          <Text style={styles.label}>Subtitle:</Text>
          <Text>{book.subtitle}</Text>
        </>
      )}
      <Text style={styles.label}>First publish year:</Text>
      <Text>{book.firstPublishYear}</Text>
      <Button title="Go back to search" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 20,
    backgroundColor: "#fff",
  },

  label: {
    fontWeight: "bold",
  },
});

export default BookDetailsScreen;
