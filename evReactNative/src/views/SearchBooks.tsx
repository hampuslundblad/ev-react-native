import React from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text } from "react-native";

import Heading from "../components/Heading";
import SearchInput from "../components/SearchInput";
import BookItem from "../components/BookItem";

import { useBooks } from "../hooks/useBooks";
function SearchBooks(): React.JSX.Element {
  const [searchText, setSearchText] = React.useState("");
  const { data: booksData, isLoading, isError } = useBooks(searchText);

  return (
    <SafeAreaView>
      <Heading size={"large"}> Explore new books! </Heading>
      <SearchInput
        placeholder={"Search for books..."}
        value={searchText}
        onChangeText={setSearchText}
      />
      {isError && <Text> Error fetching books! </Text>}
      {isLoading && <ActivityIndicator />}
      {!isLoading && booksData && (
        <FlatList
          data={booksData.books}
          renderItem={({ item }) => <BookItem {...item} />}
          keyExtractor={item => item.key}
        />
      )}
    </SafeAreaView>
  );
}

export default SearchBooks;
