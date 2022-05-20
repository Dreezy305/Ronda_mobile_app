import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  width,
  height,
};

export const COLORS = {
  primary: "#600070",
  secondary: "#D9C2DD",
  tertiary: "#455A64",
};

export const FONTS = {
  Inter_Black: require("../assets/fonts/Inter/static/Inter-Black.ttf"),
  Inter_Bold: require("../assets/fonts/Inter/static/Inter-Bold.ttf"),
  Inter_ExtraBold: require("../assets/fonts/Inter/static/Inter-ExtraBold.ttf"),
  Inter_ExtraLight: require("../assets/fonts/Inter/static/Inter-ExtraLight.ttf"),
  Inter_Light: require("../assets/fonts/Inter/static/Inter-Light.ttf"),
  Inter_Medium: require("../assets/fonts/Inter/static/Inter-Medium.ttf"),
  Inter_Regular: require("../assets/fonts/Inter/static/Inter-Regular.ttf"),
  Inter_SemiBold: require("../assets/fonts/Inter/static/Inter-SemiBold.ttf"),
  Inter_Thin: require("../assets/fonts/Inter/static/Inter-Thin.ttf"),
};

export const FontStyles = { normal: "normal", italic: "italic" };

export const FontWeights = {
  fwNormal: "normal",
  fwBold: "bold",
  fw100: "100",
  fw200: "200",
  fw300: "300",
  fw400: "400",
  fw500: "500",
  fw600: "600",
  fw700: "700",
  fw800: "800",
  fw900: "900",
};

export const TextAlignments = {
  text_auto: "auto",
  text_left: "left",
  text_right: "right",
  text_center: "center",
  text_justify: "justify",
};

export const TextDecorationLines = {
  none: "none",
  underline: "underline",
  line_through: "line-through",
  underline_linethrough: "underline line-through",
};

export const TextDecorationStyles = {
  solid: "solid",
  double: "double",
  dotted: "dotted",
  dashed: "dashed",
};

export const TextTransformations = {
  text_none: "none",
  text_uppercase: "uppercase",
  text_lowercase: "lowercase",
  text_capitalize: "capitalize",
};

export const TextAlignmentsVertical = {
  auto: "auto",
  top: "top",
  bottom: "bottom",
  center: "center",
};
