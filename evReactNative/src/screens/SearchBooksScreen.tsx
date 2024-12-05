import React from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import Heading from "../components/Heading";
import SearchInput from "../components/SearchInput";
import BookItem from "../components/BookItem";

import { Book, useBooks } from "../hooks/useBooks";
import { SearchBooksScreenProps } from "../types/routes";
import Notification from "../components/Notification";

function SearchBooksScreen({ navigation }: SearchBooksScreenProps) {
  const [searchText, setSearchText] = React.useState("");
  const { data: booksData, isLoading, isError, error } = useBooks(searchText);

  const handleOnPress = (book: Book) => {
    navigation.navigate("BookDetails", { book: book });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Heading size={"large"}> Explore new books! </Heading>
      <SearchInput
        placeholder={"Search for books..."}
        value={searchText}
        onChangeText={setSearchText}
      />
      {isError && <Notification type="error" message={error.message} />}
      {isLoading && <ActivityIndicator testID="activity-indicator" />}
      {!isLoading && booksData && booksData.books.length === 0 && (
        <Notification
          type="info"
          message={`No books found named ${searchText}`}
        />
      )}
      {!isLoading && booksData && (
        <View style={styles.listContainer}>
          <FlatList
            data={booksData.books}
            renderItem={({ item }) => {
              const { key, ...bookProps } = item;
              return (
                <BookItem
                  key={key}
                  onPress={() => handleOnPress(item)}
                  {...bookProps}
                />
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: 8,
  },
  listContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
export default SearchBooksScreen;
