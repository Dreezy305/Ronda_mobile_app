import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { ronda_light, ronda_purple } from "../constants/intro";
import { COLORS } from "../constants/theme";
import { Headline, Caption } from "react-native-paper";

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
      navigation.navigate("OnBoardong");
    }, 5000);
    clearInterval();
  }, [switchImage]);

  return (
    <View style={styles.container}>
      <Image
        source={imgArray[currentImage]}
        resizeMethod="auto"
        resizeMode="contain"
      />

      <Headline
        style={{
          fontFamily: "Inter_Bold",
          color: COLORS.primary,
          letterSpacing: 0.25,
          fontSize: 36,
          lineHeight: 45,
        }}
      >
        Ronda
      </Headline>
      <Caption
        style={{
          fontFamily: "Inter_Regular",
          color: COLORS.primary,
          fontSize: 13,
          lineHeight: 45,
          letterSpacing: 0.25,
        }}
      >
        Banking made easy for you...
      </Caption>
    </View>
  );
}

export default SplashScreen;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
