import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NotificationProps {
  message: string;
  type: "error" | "info";
}

const Notification = ({ message, type }: NotificationProps) => {
  const getStyles = () => {
    switch (type) {
      case "error":
        return styles.error;
      case "info":
        return styles.info;
      default:
        return styles.info;
    }
  };

  return (
    <View style={[styles.container, getStyles()]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  error: {
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
  },
  info: {
    backgroundColor: "#d1ecf1",
    borderColor: "#bee5eb",
  },
  text: {
    fontSize: 14,
  },
});

export default Notification;
