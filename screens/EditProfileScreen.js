import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { createAccount } from "./LoginScreen";
import { db, auth } from "../firebase";
import * as firebase from "firebase";
import { LogBox } from "react-native";
import FormInput from "../components/FormInput";

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [nameLastName, setLastName] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "",
      headerTitle: "Edit Profile",
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 78 })}
    >
      <FormInput
        placeholderText={"Name: " + auth?.currentUser?.displayName}
        autoFocus
        type="text"
        onChangeText={(text) => setName(text)}
      />
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECFAED",
    flex: 1,
    alignItems: "center",
    resizeMode: "cover",
    paddingTop: 50,
  },
  inputContainer: {
    width: 300,
  },
  loginScreenButton: {
    width: 200,
    marginTop: 10,
    backgroundColor: "#067B25",
  },
  textLogin: {
    color: "white",
  },
});
