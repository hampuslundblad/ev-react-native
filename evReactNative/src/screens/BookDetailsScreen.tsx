import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { BookDetailsScreenProps } from "../types/routes";
import Heading from "../components/Heading";

function BookDetailsScreen({ navigation, route }: BookDetailsScreenProps) {
  const book = route.params.book;
  return (
    <View style={styles.container}>
      <View style={styles.details}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  details: {
    marginTop: 10,
    width: "80%",
    gap: 8,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
  },

  label: {
    fontWeight: "bold",
  },
});

export default BookDetailsScreen;
