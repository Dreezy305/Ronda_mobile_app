import React from "react";
import { Image, StyleSheet, View, Text, Button } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { amico, rafiki, cuate } from "../constants/intro";
import { COLORS } from "../constants/theme";

function OnBoardingScreen({ navigation }: any) {
  // skip button component
  const skipButton = (props: any) => {
    return (
      <>
        <Button
          // mode="text"
          // onPress={() => navigation.navigate("SignupScreen")}
          // labelStyle={{ ...styles.buttonLabelStyle }}
          {...props}
        >
          <Text>Skip</Text>
        </Button>
      </>
    );
  };

  // next button component
  const nextButton = (props: any) => {
    return (
      <>
        <Button
          mode="text"
          onPress={() => console.log("Pressed")}
          labelStyle={{ ...styles.buttonLabelStyle }}
          {...props}
        >
          <Text>Next</Text>
        </Button>
      </>
    );
  };

  // done button component
  const doneButton = (props: any) => {
    return (
      <>
        <Button
          mode="text"
          // onPress={() => navigation.navigate("SignupScreen")}
          labelStyle={{ ...styles.buttonLabelStyle }}
          {...props}
        >
          <Text>Done</Text>
        </Button>
      </>
    );
  };

  // dots component
  const dotComponent = ({ selected }: any) => {
    return (
      <>
        <View
          style={{
            width: 7,
            height: 7,
            backgroundColor: `${selected ? COLORS.primary : COLORS.white}`,
            borderRadius: 100,
            marginHorizontal: 3,
          }}
        />
      </>
    );
  };

  return (
    <>
      <Onboarding
        onDone={() => navigation.replace("SignupScreen")}
        onSkip={() => navigation.navigate("SignupScreen")}
        SkipButtonComponent={skipButton}
        NextButtonComponent={nextButton}
        DoneButtonComponent={doneButton}
        DotComponent={dotComponent}
        titleStyles={{ ...styles.title }}
        subTitleStyles={{ ...styles.subtitle }}
        pages={[
          {
            backgroundColor: COLORS.background,
            image: (
              <Image
                source={rafiki}
                resizeMethod="scale"
                resizeMode="contain"
              />
            ),
            title: "Transfer money at zero charges",
            subtitle:
              "Make any type of transfers with no bank charges included",
          },
          {
            backgroundColor: COLORS.background,
            image: (
              <Image source={amico} resizeMethod="scale" resizeMode="contain" />
            ),
            title: "Save as you like",
            subtitle: "Earn between 11-13% P.A when you save",
          },
          {
            backgroundColor: COLORS.background,
            image: (
              <Image source={cuate} resizeMethod="scale" resizeMode="contain" />
            ),
            title: "Get a virtual card in no time",
            subtitle:
              "Request for a virtual card from the comfort of your home",
          },
        ]}
      />
    </>
  );
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Inter_Bold",
    color: COLORS.primary,
    letterSpacing: 0.25,
    fontSize: 18,
    lineHeight: 25,
  },
  subtitle: {
    fontFamily: "Inter_Regular",
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: 16,
    lineHeight: 25,
  },
  buttonLabelStyle: {
    fontFamily: "Inter_Medium",
    fontSize: 13,
    lineHeight: 40,
    color: "#000000",
    letterSpacing: 1,
  },
});
