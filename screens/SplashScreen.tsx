import React, { useEffect, useState } from "react";
import { Image, StyleSheet, SafeAreaView, Text } from "react-native";
import { ronda_light, ronda_purple } from "../constants/intro";
import { COLORS } from "../constants/theme";
// import { Headline, Caption } from "react-native-paper";

function SplashScreen({ navigation }: any) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const imgArray: any = [ronda_purple, ronda_light];

  const switchImage = () => {
    if (currentImage <= imgArray.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setInterval(switchImage, 4000);
    setTimeout(() => {
      navigation.navigate("OnBoardingScreen");
    }, 5000);
    clearInterval();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={imgArray[currentImage]}
        resizeMethod="auto"
        resizeMode="contain"
      />

      <Text
        style={{
          fontFamily: "Inter_Bold",
          color: COLORS.primary,
          letterSpacing: 0.25,
          fontSize: 36,
          lineHeight: 45,
        }}
      >
        Ronda
      </Text>
      <Text
        style={{
          fontFamily: "Inter_Regular",
          color: COLORS.primary,
          fontSize: 13,
          lineHeight: 45,
          letterSpacing: 0.25,
        }}
      >
        Banking made easy for you...
      </Text>
    </SafeAreaView>
  );
}

export default SplashScreen;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
