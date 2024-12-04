import React, { useEffect } from "react";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { onlineManager } from "@tanstack/react-query";

interface NetworkStatusProps {}

const NetworkStatus: FC<NetworkStatusProps> = ({}) => {
  useEffect(() => {
    setIsOnline(onlineManager.isOnline());
  }, []);
  const [isOnline, setIsOnline] = React.useState(false);
  if (isOnline) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Your internet connection appears to be unstable
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightcoral",
    padding: 10,
  },
  text: {
    color: "white",
  },
});

export default NetworkStatus;
