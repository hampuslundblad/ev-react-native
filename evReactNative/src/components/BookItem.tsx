import React from "react";
import { FC } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextProps,
  TouchableHighlight,
} from "react-native";
import Heading from "./Heading";

interface BookItemProps extends TextProps {
  title: string;
  authors: string[];
  onPress: () => void;
}

const BookItem: FC<BookItemProps> = ({
  title,
  authors,
  onPress,
  ...textProps
}: BookItemProps) => {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={"grey"}
      onPress={onPress}>
      <View>
        <Heading size="large" style={styles.title}>
          {title}
        </Heading>
        {/* TODO: We only show the first author */}
        <Text style={styles.author} {...textProps}>
          {authors.length > 0 ? authors[0] : "Unknown author"}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: "#555",
  },
});

export default BookItem;
