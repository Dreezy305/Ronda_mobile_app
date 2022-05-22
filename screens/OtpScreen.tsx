import React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { COLORS } from "../constants/theme";

export default function OtpScreen() {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Text style={{ ...styles.headline }}>
        Enter the 4 digit verification code sent to your email
      </Text>

      <View>{/* otp goes here */}</View>

      <Text style={{ ...styles.receiveCode }}>
        Didn’t receive a code?, resend
      </Text>
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
  receiveCode: {
    fontFamily: "Inter_Medium",
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.primary,
    textAlign: "center",
    marginVertical: 30,
  },
});
