import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { auth, db } from "../firebase";
import * as firebase from "firebase";

const listTab = [
  {
    status: "Past Games",
  },
  {
    status: "Upcoming Games",
  },
];

export default function App() {
  const window = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.profileImage}>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
              <Avatar
                marginLeft={20}
                marginTop={20}
                square
                width={150}
                height={150}
                source={{ uri: auth?.currentUser?.photoURL }}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.infoContainer, { paddingLeft: 30 }]}>
            <Text
              style={[
                styles.text,
                { fontWeight: "200", fontSize: 20, fontWeight: "bold" },
              ]}
            >
              {" "}
            </Text>
            <Text
              style={[
                styles.text,
                { fontWeight: "200", fontSize: 20, fontWeight: "bold" },
              ]}
            >
              Gray{" "}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: "#AEB5BC",
                  fontSize: 14,
                  backgroundColor: "#90ee90",
                  fontWeight: "bold",
                  marginTop: 10,
                  color: "black",
                },
              ]}
            >
              Defender
            </Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>7.0</Text>
            <Text style={[styles.text, styles.subText]}>Current Form</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>23</Text>
            <Text style={[styles.text, styles.subText]}>Games</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>45</Text>
            <Text style={[styles.text, styles.subText]}>Goals</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>8.5</Text>
            <Text style={[styles.text, styles.subText]}>Overall Form</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>20</Text>
            <Text style={[styles.text, styles.subText]}>Games Won</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>3</Text>
            <Text style={[styles.text, styles.subText]}>Man Of The Match</Text>
          </View>
        </View>
        <View style={styles.listTab}>
          {listTab.map((e) => (
            <TouchableOpacity style={styles.btnTab} onPress={() => {}}>
              <Text>{e.status}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  infoContainer: {
    alignSelf: "center",
    alignItems: "flex-start",
    marginTop: -60,
    paddingLeft: 0,
    marginLeft: -30,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
    marginTop: 0,
  },
  listTab: {
    flex: 1,

    padding: 15,
    flexDirection: "row",
  },
  btnTab: {
    width: "50%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    justifyContent: "center",
  },
});
