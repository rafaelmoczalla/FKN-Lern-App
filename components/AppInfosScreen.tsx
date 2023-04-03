import * as React from "react";

import { ScrollView, Text, View, Linking } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

import { styles } from "../constants/Styles";


export function AppInfosScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden/>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headline}>
            Gewährleistungsausschluss
          </Text>
          <Text style={styles.largeText}>
            Die App wurde mit besten Gewissen entwickelt jedoch können Fehler enthalten sein.
            Damit wird die App unter Ausschluss jeglicher Gewährleistung bereitgestellt.
          </Text>
          <Text style={styles.headline}>
            Impressum, Haftungsausschluss, Datenschutzerklärung & Copyright
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL("https://rafmo-games-studios.de.tl/Impressum.htm")}>
            https://rafmo-games-studios.de.tl/Impressum.htm
          </Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}