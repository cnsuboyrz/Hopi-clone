module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|react-navigation-tabs" +
      "|react-native-splash-screen" +
      "|react-native-screens" +
      "|react-native-reanimated" +
      ")/)",
  ],
};
