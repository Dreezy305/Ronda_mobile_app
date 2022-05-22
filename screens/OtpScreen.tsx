import React, { useRef, useState } from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput } from "react-native";
import { COLORS } from "../constants/theme";

interface otpProps {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export default function OtpScreen() {
  const firstInput: any = useRef();
  const secondInput: any = useRef();
  const thirdInput: any = useRef();
  const fourthInput: any = useRef();

  const [otp, setOtp] = useState<otpProps>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Text style={{ ...styles.headline }}>
        Enter the 4 digit verification code sent to your email
      </Text>

      <View style={{ ...styles.otpContainer }}>
        <View style={{ ...styles.otpBox }}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={(text) => {
              setOtp({ ...otp, first: text });
              text && secondInput.current?.focus();
            }}
          />
        </View>

        <View style={{ ...styles.otpBox }}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={(text) => {
              setOtp({ ...otp, second: text });
              text ? thirdInput.current?.focus() : firstInput.current?.focus();
            }}
          />
        </View>

        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={(text) => {
              setOtp({ ...otp, third: text });
              text
                ? fourthInput.current?.focus()
                : secondInput.current?.focus();
            }}
          />
        </View>

        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={(text) => {
              setOtp({ ...otp, fourth: text });
              !text && thirdInput.current?.focus();
            }}
          />
        </View>
      </View>

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
  otpContainer: {
    marginHorizontal: 20,
    marginTop: 70,
    marginBottom: 30,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 10,
    backgroundColor: COLORS.bgLight,
    borderWidth: 0.5,
    borderColor: "#000",
  },
  otpText: {
    fontSize: 20,
    color: COLORS.primary,
    height: 54,
    width: 54,
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});
