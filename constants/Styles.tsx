import { StyleSheet } from "react-native";

const margin = 15;

export const styles = StyleSheet.create({
    item: {
      height: 40,
      margin: margin,
      borderWidth: 1,
      textAlignVertical: "center",
      alignContent: "center",
      textAlign: "center"
    },
    headline: {
      marginTop: 20,
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 23,
      fontWeight: "bold",
      textAlign: "center"
    },
    centeredText: {
      marginTop: 8,
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      textAlign: "center"
    },
    text: {
      marginTop: 8,
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      textAlign: "justify"
    },
    link: {
      marginTop: 8,
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      textAlign: "justify",
      textDecorationLine: "underline",
      color: "blue"
    },
    linkBox: {
      height: 40,
      margin: margin,
      borderWidth: 1,
      textAlignVertical: "center",
      alignContent: "center",
      textAlign: "center"
    },
    button: {
      marginTop: margin,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      backgroundColor: "lightblue"
    },
    buttonText: {
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      textAlign: "center"
    },
    dropDown: {
      borderWidth: 1,
      textAlign: "center"
    },
    container: {
      paddingBottom: 10
    },
    loading: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    scrollView: {
      paddingHorizontal: 15
    },
  });