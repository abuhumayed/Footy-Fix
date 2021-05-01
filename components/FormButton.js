import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#067B25",
    width: 300,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
