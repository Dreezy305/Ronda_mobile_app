import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { amico, rafiki, cuate } from "../constants/intro";
import { COLORS } from "../constants/theme";
import { Button } from "react-native-paper";

function OnBoardingScreen({ navigation }: any) {
  // skip button component
  const skipButton = ({ ...props }) => {
    return (
      <>
        <Button
          mode="text"
          onPress={() => console.log("Pressed")}
          labelStyle={{ ...styles.buttonLabelStyle }}
          {...props}
        >
          Skip
        </Button>
      </>
    );
  };

  // next button component
  const nextButton = ({ ...props }) => {
    return (
      <>
        <Button
          mode="text"
          onPress={() => console.log("Pressed")}
          labelStyle={{ ...styles.buttonLabelStyle }}
          {...props}
        >
          Next
        </Button>
      </>
    );
  };

  // done button component
  const doneButton = ({ ...props }) => {
    return (
      <>
        <Button
          mode="text"
          onPress={() => console.log("Pressed")}
          labelStyle={{ ...styles.buttonLabelStyle }}
          {...props}
        >
          Done
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
        onDone={() => navigation.replace("LoginScreen")}
        onSkip={() => navigation.navigate("LoginScreen")}
        SkipButtonComponent={skipButton}
        NextButtonComponent={nextButton}
        DoneButtonComponent={doneButton}
        DotComponent={dotComponent}
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
            image: <Image source={amico} />,
            title: "Save as you like",
            subtitle: "Earn between 11-13% P.A when you save",
          },
          {
            backgroundColor: COLORS.background,
            image: <Image source={cuate} />,
            title: "Get a virtual card in no time",
            subtitle:
              "Request for a virtual card from the comfort of your home",
          },
        ]}
        titleStyles={{ ...styles.title }}
        subTitleStyles={{ ...styles.subtitle }}
      />
    </>
  );
}

export default OnBoardingScreen;

const styles: any = StyleSheet.create({
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
