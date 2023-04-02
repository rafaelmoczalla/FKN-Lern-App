import * as React from "react";

import { Text, View } from "react-native";

import { styles } from "../constants/Styles";


export function randomIdx() {
  return Math.floor(Math.random() * 100) % 60;
}

export function Cell({ item }: { item: string }) {
  return (
    <View style={item == "Ergebnis" || item == "Bestanden" || item == "Durchgefallen" ? styles.cellStyleResult : styles.cellStyle}>
      <Text style={item == "Bestanden" ? styles.greenText : item == "Durchgefallen" ? styles.redText : styles.text}>{item}</Text>
    </View>
  );
}

export function Row({ column }: { column: string[] }) {
  return (
    <View style={styles.rowStyle}>
      {column.map((item: string) => (
        <Cell item={item} key={JSON.stringify(item)} />
      ))}
    </View>
  );
}

export function Grid({ data }: { data: string[][] }) {
  return (
    <View style={styles.gridContainer}>
      {data.map((column: string[]) => (
        <Row column={column} key={JSON.stringify(column)} />
      ))}
    </View>
  );
}