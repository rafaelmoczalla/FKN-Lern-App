import * as React from "react";

import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StatusBar } from "expo-status-bar";

import { styles } from "../constants/Styles";

import { Grid } from "./Tools";


export function StatisticsScreen({ navigation }: { navigation: any }) {
  const [data, setData] = React.useState<string[][]>([ [ "0" ] ]);
  const [clearCount, setClearCount] = React.useState<number>(0);

  const readExamResult = async () => {
    try {
      const jsonExams = await AsyncStorage.getItem('@exams');

      if (jsonExams !== null) {
        setData( JSON.parse(jsonExams) );
      } else {
        setData([ [ "Es wurden noch keine Prüfungen absolviert." ] ]);
      }
    } catch (e) {
      setData([ [ "Es ist ein Fehler beim laden der Prüfungsdaten aufgetreten." ] ]);
    }
  }

  React.useEffect(() => {
    readExamResult();
  }, []);

  const clearStatistic = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // Do nothing...
    }
  }

  React.useEffect(() => {
    if (clearCount > 0) {
      clearStatistic();
      readExamResult();
    }
  }, [clearCount]);

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden/>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.headline}>
            Prüfungssimulation
          </Text>
          <Grid data={data} key={JSON.stringify(data)} />
          <Pressable
            style={styles.button}
            accessibilityLabel="Die Statistik wird gelöscht."
            onPress={() => {
              setClearCount(clearCount + 1);
            }}
          >
            <Text style={styles.buttonText}>Statistik löschen</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}