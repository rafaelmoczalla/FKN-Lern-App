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
    boldText: {
      marginTop: 8,
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "justify"
    },
    success: {
      marginTop: 8,
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "justify",
      color: "green"
    },
    failure: {
      marginTop: 8,
      textAlignVertical: "center",
      alignContent: "center",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "justify",
      color: "red"
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
    countButton: {
      flex: 1,
      marginTop: 30,
      margin: 10,
      flexDirection: "row",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      backgroundColor: "lightblue"
    },
    dropDown: {
      borderWidth: 1,
      textAlign: "center"
    },
    container: {
      paddingBottom: 10,
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    touchableOpacity: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
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
    gridContainer: {
      flex: 1,
      margin: margin,
      alignItems: "center",
      justifyContent: "center"
    },
    rowStyle: {
      flex: 1,
      width: 480,
      flexDirection: "row",
      alignItems: "center",
      textAlignVertical: "center",
      alignContent: "center",
      justifyContent: "flex-start",
      borderColor: "grey",
      borderBottomWidth: 1
    },
    cellStyle: {
      flex: 2,
      marginBottom: 8,
      textAlignVertical: "center",
      alignContent: "center",
      justifyContent: "flex-start"
    },
    cellStyleScore: {
      flex: 1,
      marginBottom: 8,
      textAlignVertical: "center",
      alignContent: "center",
      justifyContent: "flex-start"
    },
    cellStyleResult: {
      flex: 3,
      marginBottom: 8,
      textAlignVertical: "center",
      alignContent: "center",
      justifyContent: "flex-start"
    }
  });