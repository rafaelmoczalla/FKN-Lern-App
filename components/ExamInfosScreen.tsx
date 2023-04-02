import * as React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, Text, View, Pressable, Linking } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { styles } from '../constants/Styles';


export function ExamInfosScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden/>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.headline}>
            Generelles
          </Text>
          <Text style={styles.text}>
            Voraussetzung für den FKN ist ein Mindestalter von 16 Jahren & der Besitz eines amtlichen
            Sportbootführerscheins oder eines sonstigen anerkannten Befähigungsnachweises zum Führen
            von Wassersportfahrzeugen.
            Grundsätzlich wird in der FKN Prüfung der Umgang mit Seenotsignalmitteln geprüft.
          </Text>
          <Text style={styles.headline}>
            Theoretischer Teil
          </Text>
          <Text style={styles.text}>
            Die Prüfung für den FKN besteht aus einem theoretischen & einem praktischen Teil.
            Im theoretischen Teil muss ein Fragebogen mit 15 Fragen aus einem einheitlichen Fragenkatalog
            von 60 Fragen bearbeitet werden.
            Für jede vollständig beantwortete Frage werden 2 Punkt vergeben.
            Für grundsätzlich richtige Antworten kann 1 Punkt vergeben werden.
            Von den insgesamt 30 möglichen Punkten müssen mindesten 24 Punkte erreicht werden.
            Mit 23 oder weniger Punkten wird die Prüfung mit durchgefallen bewertet.
            In dieser App sind alle Fragen aus dem Fragenkatalog sowie die vier möglichen Fragenbögen
            enthalten & können zu Übungszwecken verwendet werden.
          </Text>
          <Text style={styles.headline}>
            Praktischer Teil
          </Text>
          <Text style={styles.text}>
            Der abschließende praktische Teil prüft den sicheren ausgeführten Umgang mit Seenotsignalmitteln.
            Zu den Seenotsignalmitteln im praktischen Teil gehören die Fallschirm-Signalrakete (rot),
            die Rauchfackel (orange) bzw. die Handfackel (rot), das Rauchsignal (orange/Dose) &
            der Signalgeber mit Magazin/Trommel.
            Nachfolgend ist ein gutes Youtubevideo, dass den Umgang bespricht.
            Außerdem wird geprüft wie mit nicht gezündeten Signalmitteln, so genannten "Versagern", umgegangen wird.
            Versager müssen über Bord geworfen werden.
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL("https://youtu.be/p04KGa0I1LE")}>
            https://youtu.be/p04KGa0I1LE
          </Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}