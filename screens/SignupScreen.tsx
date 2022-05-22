import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/theme";

interface formData {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  referralCode?: string;
}

export default function SignupScreen() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [referral, setReferral] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // ERROR STATES
  const [fullNameError, setFullNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);

  const payload = {
    fullName: fullName,
    emailAddress: email,
    phoneNumber: phone,
    password: password,
    referralCode: referral,
  };

  const validateEmail = (m: string) => {
    const EmailRegexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!EmailRegexp.test(m)) {
      // console.log(!EmailRegexp.test(m));
      setLoading(false);
      return setEmailError(true);
    } else {
      return setEmailError(false);
    }
  };

  const validatePassword = (p: string) => {
    const PasswordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!PasswordRegexp.test(p)) {
      // console.log(!PasswordRegexp.test(p));
      setLoading(false);
      return setPassError(true);
    } else {
      return setPassError(false);
    }
  };

  const FullNameCheck = (f: string) => {
    if (f == "") {
      setFullNameError(true);
      setLoading(false);
    } else {
      setFullNameError(false);
    }
  };

  const handleSignUp = (values: formData) => {
    validateEmail(values.emailAddress);

    validatePassword(values.password);

    FullNameCheck(values.fullName);

    return values;
  };

  return (
    <SafeAreaView>
      <Text style={{ ...styles.headline }}>Set up your Ronda account.</Text>

      <ScrollView style={{ paddingBottom: 30 }}>
        <View style={{ ...styles.form }}>
          <>
            <Text style={{ ...styles.label }}>Full Name</Text>
            <TextInput
              style={{
                ...styles.textInput,
              }}
              value={fullName}
              onChangeText={(fullName) => setFullName(fullName)}
            />
            {fullNameError && <Text>This Field is required</Text>}
          </>
        </View>

        <View style={{ ...styles.form }}>
          <>
            <Text style={{ ...styles.label }}>Email Address</Text>
            <TextInput
              style={{
                ...styles.textInput,
              }}
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            {emailError && <Text>Email is invalid</Text>}
          </>
        </View>

        <View style={{ ...styles.form }}>
          <>
            <Text style={{ ...styles.label }}>Phone Number</Text>
            <TextInput
              style={{
                ...styles.textInput,
              }}
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
            />
            {phoneError && <Text>Phone number is invalid</Text>}
          </>
        </View>

        <View style={{ ...styles.form }}>
          <>
            <Text style={{ ...styles.label }}>Password</Text>
            <TextInput
              style={{
                ...styles.textInput,
              }}
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
            {passError && (
              <Text>
                {" "}
                Min 8 characters, at least 1 uppercase letter, 1 lowercase
                letter and 1 number
              </Text>
            )}
          </>
        </View>

        <View style={{ ...styles.form }}>
          <>
            <Text style={{ ...styles.label }}>
              Got a referral code ? (optional)
            </Text>
            <TextInput
              style={{
                ...styles.textInput,
              }}
              value={referral}
              onChangeText={(referra) => setReferral(referra)}
            />
          </>
        </View>

        <View style={{ ...styles.form, paddingBottom: 40, marginBottom: 40 }}>
          <TouchableOpacity
            style={styles.signUP}
            onPress={() => handleSignUp(payload)}
          >
            <Text style={{ ...styles.cta }}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{ paddingBottom: 30, paddingTop: 10, marginBottom: 30 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Inter_Regular",
                paddingVertical: 10,
                fontSize: 13,
                lineHeight: 22,
              }}
            >
              By registering you accept our
            </Text>
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 30,
                fontFamily: "Inter_Regular",
                color: COLORS.primary,
              }}
            >
              <Text style={{ fontFamily: "Inter_Regular" }}>
                Terms & Conditions
              </Text>{" "}
              and <Text>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headline: {
    fontFamily: "Inter_Bold",
    margin: "auto",
    textAlign: "center",
    marginTop: 20,
    paddingTop: 50,
    color: COLORS.primary,
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: -0.288759,
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 20,
    paddingTop: 20,
  },
  textInput: {
    fontFamily: "Inter_Regular",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.background,
  },
  label: {
    paddingBottom: 20,
    fontFamily: "Inter_Regular",
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: 0.25,
  },
  signUP: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    textAlign: "center",
    margin: "auto",
    fontFamily: "Inter_Bold",
    padding: 20,
    marginHorizontal: 20,
    borderColor: COLORS.primary,
  },
  cta: {
    fontFamily: "Inter_Medium",
    textAlign: "center",
    textTransform: "uppercase",
    color: COLORS.white,
    fontSize: 18,
    lineHeight: 22,
  },
});
