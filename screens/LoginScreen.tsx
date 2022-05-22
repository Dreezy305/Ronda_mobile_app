import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <Text style={{ ...styles.headline }}>LoginScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headline: {
    fontFamily: "Inter_Bold",
    margin: "auto",
    textAlign: "center",
    marginTop: 20,
    paddingTop: 50,
    color: "#000000",
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: -0.288759,
  },
});
