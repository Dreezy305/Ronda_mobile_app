import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { ronda_light, ronda_purple } from "../constants/intro";
import { COLORS, TextAlignments } from "../constants/theme";

function splash({ navigation }: any) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const imgArray: any = [ronda_light, ronda_purple];

  const switchImage = () => {
    if (currentImage < imgArray.length) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setInterval(switchImage, 2000);

    setTimeout(() => {
      navigation.navigate("");
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={imgArray[currentImage]}
        resizeMethod="scale"
        resizeMode="contain"
        style={styles.imgStyle}
      />
    </View>
  );
}

export default splash;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  imgStyle: {
    padding: 20,
    width: 350,
    height: 350,
  },
});
