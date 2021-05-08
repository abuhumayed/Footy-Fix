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
          backgroundColor: "#C5D82E",
          image: (
            <Image
              style={[
                { width: 414 },
                { height: 415 },
                { resizeMode: "contain" },
              ]}
              source={require("../assets/onboarding1.jpg")}
            />
          ),
          title: "Be apart of a community!",
          subtitle: "Have interactions and play football with new friends.",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/favicon.png")} />,
          title: "Onboarding 2",
          subtitle: "",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/favicon.png")} />,
          title: "Onboarding 3",
          subtitle: "",
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
  image: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
