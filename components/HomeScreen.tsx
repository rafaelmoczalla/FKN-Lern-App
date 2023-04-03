import * as React from "react";

import { ScrollView, Text, View, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

import { randomIdx } from "./Tools";
import { styles } from "../constants/Styles";


export function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden/>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.headline}>
            Fachkundenachweis (FKN) für Seenotsignalmittel
          </Text>
          <Text style={styles.largeText}>
            Diese App ist ein Hilfsmittel zum Vorbereiten für die Prüfung zum Fachkundenachweis (FKN) für
            Seenotsignalmittel nach dem Sprengstoffrecht gemäß § 1 Abs. 2 1. SprengV Stand 16. Juli 2021.
            Alle Informationen & der Fragenkatalog basieren auf der Prüfungsordnung FKN herausgegeben
            durch den Deutschen Segler-Verband.
          </Text>
          <Text style={styles.headline}>
            Erste Schritte
          </Text>
          <Pressable
            style={styles.button}
            accessibilityLabel="Generelle Prüfungsinformationen"
            onPress={() => {
              navigation.navigate("Prüfungsinformationen", {
                itemId: randomIdx()
              });
            }}
          >
            <Text style={styles.buttonText}>Prüfungsinformationen</Text>
          </Pressable>
          <Text style={styles.headline}>
            Übung & Lernen
          </Text>
          <Text style={styles.largeText}>
            Der Fragenkatalog zeigt jeweils eine zufällige Frage.
            Bei Tippen auf dem Bildschirm wird die Antwort aufgedeckt.
            Bei erneuten Tippen auf den Bildschirm wird die nächste Frage aufgedeckt.
            Dies eignet sich sehr gut für das Lernen in den Öffis.
          </Text>
          <Pressable
            style={styles.button}
            accessibilityLabel="Zufällige Folge von Fragen aus dem Fragenkatalog."
            onPress={() => {
              navigation.navigate("Fragenkatalog", {
                itemId: randomIdx()
              });
            }}
          >
            <Text style={styles.buttonText}>Fragenkatalog</Text>
          </Pressable>
          <Text style={styles.headline}>
            Prüfungssimulation
          </Text>
          <Text style={styles.largeText}>
            Die 4 offiziellen Fragebögen der theoretischen Prüfung mit jeweils
            15 Fragen.
            Jede vollständig beantwortete Frage erhält 2 Punkt.
            Grundsätzlich richtige Antworten können 1 Punkt erhalten.
            Von 30 möglichen Punkten müssen mindesten 24 Punkte erreicht werden.
            Mit 23 oder weniger Punkten wird die Prüfung mit durchgefallen bewertet.
            Aktuell muss die Auswärtung der Fragen & das Zusammenzählen der Punkte
            manuell durchgeführt werden.
          </Text>
          <Pressable
            style={styles.button}
            accessibilityLabel="Prüfungsbogen FKN 001"
            onPress={() => {
              navigation.navigate("Prüfungssimulation", {
                itemId: 0
              });
            }}
          >
            <Text style={styles.buttonText}>Prüfungsbogen FKN 001</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            accessibilityLabel="Prüfungsbogen FKN 002"
            onPress={() => {
              navigation.navigate("Prüfungssimulation", {
                itemId: 1
              });
            }}
          >
            <Text style={styles.buttonText}>Prüfungsbogen FKN 002</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            accessibilityLabel="Prüfungsbogen FKN 003"
            onPress={() => {
              navigation.navigate("Prüfungssimulation", {
                itemId: 2
              });
            }}
          >
            <Text style={styles.buttonText}>Prüfungsbogen FKN 003</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            accessibilityLabel="Prüfungsbogen FKN 004"
            onPress={() => {
              navigation.navigate("Prüfungssimulation", {
                itemId: 3
              });
            }}
          >
            <Text style={styles.buttonText}>Prüfungsbogen FKN 004</Text>
          </Pressable>
          <Text style={styles.headline}>
            Verlauf
          </Text>
          <Text style={styles.largeText}>
            Übersicht der bisherigen Übungen.
          </Text>
          <Pressable
            style={styles.button}
            accessibilityLabel="Verlauf der Prüfungssimulationen & Histogram der bearbeiteten Fragen aus dem Fragenkatalog."
            onPress={() => {
              navigation.navigate("Statistik", {
                itemId: randomIdx()
              });
            }}
          >
            <Text style={styles.buttonText}>Statistik</Text>
          </Pressable>
          <Text style={styles.headline}>
            Weitere Informationen
          </Text>
          <Pressable
            style={styles.button}
            accessibilityLabel="Rechtliche Hinweise wie Gewährleistungsausschluss etc."
            onPress={() => {
              navigation.navigate("Rechtliche Hinweise", {
                itemId: randomIdx()
              });
            }}
          >
            <Text style={styles.buttonText}>Rechtliche Hinweise</Text>
          </Pressable>
          <Text style={styles.largeCenteredText}>
            {"\u00A9"} März 2023 Rafael Moczalla
          </Text>
          <Text style={styles.largeCenteredText}>
            Version 1.3.3
          </Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}