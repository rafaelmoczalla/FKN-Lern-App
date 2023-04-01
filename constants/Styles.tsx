import { StyleSheet } from "react-native";

const width = "99%";
const margin = "0.3%";

export const styles = StyleSheet.create({
    title: {
      fontSize: 26,
      fontWeight: "bold",
      textAlign: "center",
      color: "#dc143c"
    },
    item: {
      height: 40,
      width: width,
      margin: margin,
      borderWidth: 1,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      textAlignVertical: "center",
      alignContent: "center",
      textAlign: "center",
    },
    headline: {
      width: width,
      margin: margin,
      marginTop: "1.5%",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 23,
      fontWeight: "bold",
      textAlign: "center",
    },
    text: {
      width: width,
      margin: margin,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      textAlign: "center",
    },
    link: {
      width: width,
      margin: margin,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      textAlign: "center",
      textDecorationLine: "underline",
      color: "blue"
    },
    linkBox: {
      height: 40,
      width: width,
      margin: margin,
      borderWidth: 1,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      textAlignVertical: "center",
      alignContent: "center",
      textAlign: "center"
    },
    button: {
      margin: margin,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      backgroundColor: "lightblue",
    },
    buttonText: {
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      textAlign: "center",
    },
    /*button: {
      height: 40,
      width: width,
      margin: margin,
      borderWidth: 1,
      textAlign: "center"
    },*/
    dropDown: {
      width: width,
      borderWidth: 1,
      textAlign: "center"
    },
    container: {
    },
    loading: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: "center",
      justifyContent: "center"
    },
    scrollView: {
    },
  });