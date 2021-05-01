//import liraries
import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Input } from "react-native-elements";

// create a component
const FormInput = ({ labelValue, placeholderText, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Input
        numberOfLines={1}
        placeholder={placeholderText}
        value={labelValue}
        {...rest}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
});

//make this component available to the app
export default FormInput;
