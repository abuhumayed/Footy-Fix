import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const Done = ({ ...props }) => (
  <Button title="Done" color="#067B25" {...props} />
);
const Skip = ({ ...props }) => (
  <Button title="Skip" color="#067B25" {...props} />
);
const Next = ({ ...props }) => (
  <Button title="Next" color="#067B25" {...props} />
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      DoneButtonComponent={Done}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/favicon.png")} />,
          title: "Onboarding 1",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/favicon.png")} />,
          title: "Onboarding 2",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/favicon.png")} />,
          title: "Onboarding 3",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
