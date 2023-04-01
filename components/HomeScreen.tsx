import * as React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, Text, View, Pressable, Linking } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { randomIdx } from './Tools';
import { styles } from '../constants/Styles';


export function HomeScreen({ navigation }: { navigation: any }) {
    return (
      <SafeAreaProvider style={styles.container}>
        <StatusBar hidden/>
        <ScrollView style={styles.scrollView}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.headline}>
              Fachkundenachweis (FKN) für Seenotsignalmittel
            </Text>
            <Text style={styles.text}>
              Diese App ist ein Hilfmittel zum Vorbereiten für die Prüfung zum Fachkundenachweis (FKN) für
              Seenotsignalmittel nach dem Sprengstoffrecht gemäß § 1 Abs. 2 1. SprengV Stand 16. Juli 2021.
            </Text>
            <Text style={styles.headline}>
              Prüfungsinformationen
            </Text>
            <Text style={styles.text}>
              Voraussetzung für den FKN ist ein Mindestalter von 16 Jahre & der Besitz eines amtlichen
              Sportbootführerscheins oder eines sonstigen anerkannten Befähigungsnachweises zum Führen
              von Wassersportfahrzeugen.
              Grundsätzlich wird in der FKN Prüfung der Umgang mit Seenotsignalmitteln geprüft.
            </Text>
            <Text style={styles.text}>
              Die Prüfung für den FKN besteht aus einem theoretischen & einem praktischen Teil.
              Im theoretischen muss ein Fragebogen mit 15 Fragen aus einem einheitlichen Fragenkatalog
              von 60 Fragen bearbeitet werden.
              Für jede vollständig beantwortete Frage werden 2 Punkt vergeben.
              Für grundsätzlich richtige Antworten kann 1 Punkt vergeben werden.
              Von den insgesamt 30 möglichen Punkten müssen mindesten 24 Punkte erreicht werden.
              Mit 23 oder weniger Punkten wird die Prüfung mit durchgefallen bewertet.
              In dieser App sind alle Fragen aus dem Fragenkatalog sowie die vier möglichen Fragenbogen
              enthalten & können zu Übungszwecken verwendet werden.
            </Text>
            <Text style={styles.text}>
              Im praktischen Teil wird die sichere praktische Umgang von Seenotsignalmitteln geprüft.
              Zu den Seenotsignalmitteln im praktischen Teil gehören die Fallschirm-Signalrakete (rot),
              die Rauchfackel (orange) bzw. die Handfackel (rot), das Rauchsignal (orange/Dose) &
              der Signalgeber mit Magazin/Trommel.
              Nachfolgend ist ein gutes Youtubevideo, dass den Umgang mit den Signalmitteln bespricht.
              Außerdem wird der Umgang mit nicht gezündeten Signalmitteln/Versagern geprüft.
              Versager müssen über Bord geworfen werden.
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL("https://youtu.be/p04KGa0I1LE")}>
            https://youtu.be/p04KGa0I1LE
            </Text>
            <Text style={styles.headline}>
              Prüfungsbögen
            </Text>
            <Pressable
              style={styles.button}
              accessibilityLabel="Prüfungsbogen FKN 001"
              onPress={() => {
                navigation.navigate("Pruefungsboegen", {
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
                navigation.navigate("Pruefungsboegen", {
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
                navigation.navigate("Pruefungsboegen", {
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
                navigation.navigate("Pruefungsboegen", {
                  itemId: 3
                });
              }}
            >
              <Text style={styles.buttonText}>Prüfungsbogen FKN 004</Text>
            </Pressable>
            <Text style={styles.headline}>
              Fragenkatalog
            </Text>
            <Text style={styles.text}>
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
              Statistik
            </Text>
            <Text style={styles.text}>
              TBD: Statistik über wie oft die Antworten der Fragen aufgedeckt wurden.
            </Text>
            <Text style={styles.headline}>
              Gewährleistungsausschluss
            </Text>
            <Text style={styles.text}>
              Die App wurde mit besten Gewissen entwickelt jedoch können Fehler enthalten sein.
              Damit wird die App unter Ausschluss jeglicher Gewährleistung bereitgestellt.
            </Text>
            <Text style={styles.headline}>
              Impressum, Haftungsausschluss, Datenschutzerklärung & Copyright
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL("https://rafmo-games-studios.de.tl/Impressum.htm")}>
              https://rafmo-games-studios.de.tl/Impressum.htm
            </Text>
            <Text style={styles.text}>
              {'\u00A9'} März 2023 Rafael Moczalla
            </Text>
            <Text style={styles.text}>
              Version 1.1.0
            </Text>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  }