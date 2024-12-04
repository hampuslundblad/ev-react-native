import React from "react";
import { FC } from "react";
import { Text, View } from "react-native";
import Heading from "./Heading";

interface BookItemProps {
  title: string;
  authors: string[];
}

const BookItem: FC<BookItemProps> = ({ title, authors }: BookItemProps) => {
  return (
    <View>
      <Heading size="small"> {title} </Heading>
      <Text> {authors[0]} </Text> {/* TODO: We only show the first author */}
    </View>
  );
};

export default BookItem;
