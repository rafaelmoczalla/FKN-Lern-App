import * as React from "react";

import { ScrollView, Text, View, Linking } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

import { styles } from "../constants/Styles";


export function ExamInfosScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden/>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headline}>
            Generelles
          </Text>
          <Text style={styles.largeText}>
            Voraussetzung für den FKN ist ein Mindestalter von 16 Jahren & der Besitz eines amtlichen
            Sportbootführerscheins oder eines sonstigen anerkannten Befähigungsnachweises zum Führen
            von Wassersportfahrzeugen.
            Grundsätzlich wird in der FKN Prüfung der Umgang mit Seenotsignalmitteln geprüft.
            Die Zulassung/Anmeldung zur Prüfung muss bei einem Prüfungsauschuss des Deutschen Segler
            Verbands oder des Deutschen Motoryachtverbands erfolgen.
            7 Tage vor dem Prüfungsbeginn müssen der Antrag auf Zulassung, eine Kopie des
            Sportbootführerschein oder eines anerkannter Befähigungsnachweis zum Führen von
            Wassersportfahrzeugen & ein Nachweis über die Zahlung der Prüfungsgebühr an den
            Prüfungsauschuss gesendet werden.
          </Text>
          <Text style={styles.headline}>
            Theoretischer Teil
          </Text>
          <Text style={styles.largeText}>
            Die Prüfung für den FKN besteht aus einem theoretischen & einem praktischen Teil.
            Im theoretischen Teil muss ein Fragebogen mit 15 Fragen aus einem einheitlichen Fragenkatalog
            von 60 Fragen bearbeitet werden.
            Für jede vollständig beantwortete Frage werden 2 Punkt vergeben.
            Für grundsätzlich richtige Antworten kann 1 Punkt vergeben werden.
            Von den insgesamt 30 möglichen Punkten müssen mindesten 24 Punkte erreicht werden.
            Mit 23 oder weniger Punkten wird die Prüfung mit durchgefallen bewertet.
            In dieser App sind alle Fragen aus dem Fragenkatalog sowie die vier möglichen Fragenbögen
            enthalten & können zu Übungszwecken verwendet werden.
            Zum Bearbeiten des Fragebogens hat man 30 Minuten Zeit.
          </Text>
          <Text style={styles.headline}>
            Praktischer Teil
          </Text>
          <Text style={styles.largeText}>
            Der praktische Teil prüft die sichere Handhabung von Seenotsignalmitteln & ausreichende
            Fertigkeiten des tatsächlichen Gebrauch.
            Zu den Seenotsignalmitteln im praktischen Teil gehören die Fallschirm-Signalrakete (rot),
            die Rauchfackel (orange) bzw. die Handfackel (rot), das Rauchsignal (orange/Dose) &
            der Signalgeber mit Magazin/Trommel.
            Es gibt gute Youtubevideos <Text style={styles.link} onPress={() => Linking.openURL("https://youtu.be/p04KGa0I1LE")}>
              https://youtu.be/p04KGa0I1LE
            </Text> die den Umgang besprechen.
            Außerdem wird der Umgang mit nicht gezündeten Signalmitteln, so genannten "Versagern", geprüft.
            Versager müssen über Bord geworfen werden.
            Zum bestehen des praktischen Teils müssen von 4 gestellten Aufgaben mindestens 3 mit aureichendem
            Ergebnis gelöst werden.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}