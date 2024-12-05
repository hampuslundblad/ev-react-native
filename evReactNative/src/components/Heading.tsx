import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface HeadingProps extends TextProps {
  size: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Heading = ({ size, children, ...textProps }: HeadingProps) => {
  const getFontSize = () => {
    switch (size) {
      case "small":
        return styles.small;
      case "medium":
        return styles.medium;
      case "large":
        return styles.large;
      default:
        return styles.medium;
    }
  };

  return (
    <Text style={getFontSize()} {...textProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  small: {
    fontSize: 16,
  },
  medium: {
    fontSize: 20,
  },
  large: {
    fontSize: 24,
  },
});

export default Heading;
