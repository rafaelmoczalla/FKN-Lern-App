import * as React from "react";

import { Text, TouchableOpacity, Pressable, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "../constants/Styles";
import { questions, answers } from "../constants/QaA";


const bogen0 = new Map<number, number>([
  [0, 0],
  [1, 4],
  [2, 11],
  [3, 13],
  [4, 17],
  [5, 20],
  [6, 22],
  [7, 28],
  [8, 32],
  [9, 36],
  [10, 40],
  [11, 46],
  [12, 53],
  [13, 55],
  [14, 59]
]);

const bogen1 = new Map<number, number>([
  [0, 1],
  [1, 6],
  [2, 10],
  [3, 12],
  [4, 19],
  [5, 23],
  [6, 25],
  [7, 27],
  [8, 30],
  [9, 33],
  [10, 37],
  [11, 45],
  [12, 50],
  [13, 56],
  [14, 58]
]);

const bogen2 = new Map<number, number>([
  [0, 2],
  [1, 5],
  [2, 9],
  [3, 14],
  [4, 18],
  [5, 21],
  [6, 29],
  [7, 31],
  [8, 35],
  [9, 38],
  [10, 41],
  [11, 43],
  [12, 49],
  [13, 51],
  [14, 57]
]);

const bogen3 = new Map<number, number>([
  [0, 3],
  [1, 7],
  [2, 8],
  [3, 15],
  [4, 16],
  [5, 24],
  [6, 26],
  [7, 34],
  [8, 39],
  [9, 42],
  [10, 44],
  [11, 47],
  [12, 48],
  [13, 52],
  [14, 54]
]);

const boegen = new Map<number, Map<number, number>>([
  [0, bogen0],
  [1, bogen1],
  [2, bogen2],
  [3, bogen3]
]);

const bogenCode = new Map<number, string>([
  [0, "FKN 001"],
  [1, "FKN 002"],
  [2, "FKN 003"],
  [3, "FKN 004"]
]);

export function PruefungsboegenScreen({ route, navigation }: { route: any, navigation: any }) {
  const { itemId } = route.params;

  const [endOfExam, setEndOfExam] = React.useState(false);
  const [firstTap, setFirstTap] = React.useState(false);
  const [points, setPoints] = React.useState<number>(0);

  var cBogen = boegen.get(itemId);
  if (cBogen == undefined || cBogen == null)
    cBogen = bogen0;

  const [bogen, setBogen] = React.useState<Map<number, number>>(cBogen);

  const [it, setIt] = React.useState<number>(0);

  var cQId = cBogen.get(it);
  if (cQId == undefined || cQId == null)
  cQId = 0;

  const [qId, setQId] = React.useState<number>(cQId);

  const [stateQuestion, setStateQuestion] = React.useState(questions.get(qId));
  const [stateAnswer, setStateAnswer] = React.useState(answers.get(60));

  function tapOnScreen() {
    if (!endOfExam && it >= bogen0.size && firstTap)
      setEndOfExam(true);

    setFirstTap(!firstTap);
  }

  const storeExamResult = async (bogen: string, endPoints: number, success: string) => {
    try {
      var examsArray: string[][];

      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();

      const entry = [
        year + "-" + month + "-" + day,
        bogen,
        JSON.stringify(endPoints) + "/30",
        success
      ];

      const jsonExams = await AsyncStorage.getItem('@exams');

      if (jsonExams !== null) {
        examsArray = JSON.parse(jsonExams);
        examsArray.push(entry);
      } else {
        examsArray = [
          [ "Datum", "Bogen", "Punkte", "Ergebnis" ],
          entry
        ];
      }

      const jsonNewExams = JSON.stringify(examsArray);

      await AsyncStorage.setItem('@exams', jsonNewExams);
    } catch (e) {
      // do nothing else
    }
  }

  React.useEffect(() => {
    if (firstTap && it <= bogen0.size) {
      setStateAnswer(answers.get(qId));
    } else if (it < bogen0.size) {
      var cQId = bogen.get(it);
      if (cQId == undefined || cQId == null)
        cQId = 0;
      setQId(cQId);
      setIt(it + 1);
    }

    if (endOfExam) {
      const readBogenId = bogenCode.get(itemId);
      var bogenId = "undefined";

      if (readBogenId != undefined && readBogenId != null)
        bogenId = readBogenId;

      if (points >= 24)
        storeExamResult(bogenId, points, "Bestanden");
      else
        storeExamResult(bogenId, points, "Durchgefallen");
    }
  }, [firstTap]);

  React.useEffect(() => {
    setStateQuestion(questions.get(qId));
    setStateAnswer(answers.get(60));
  }, [qId]);

  if (endOfExam && points >= 24)
    return(
      <SafeAreaProvider style={styles.container}>
        <Text style={styles.largeBoldText}>{points}/30 Punkten erreicht</Text>
        <Text style={styles.largeSuccess}>Bestanden!</Text>
      </SafeAreaProvider>
    )
  else if (endOfExam)
    return(
      <SafeAreaProvider style={styles.container}>
        <Text style={styles.largeBoldText}>{points}/30 Punkten erreicht</Text>
        <Text style={styles.largeFailure}>Durchgefallen</Text>
      </SafeAreaProvider>
    )
  else if (firstTap)
    return (
      <SafeAreaProvider style={styles.container}>
        <Text style={styles.headline}>Frage {it}/15:</Text>
        <Text style={styles.largeCenteredText}>{stateQuestion}</Text>
        <Text style={styles.headline}>Antwort:</Text>
        <Text style={styles.largeCenteredText}>{stateAnswer}</Text>
        <View style={{flexDirection: "row"}}>
          <Pressable
            style={styles.countButton}
            accessibilityLabel="Kein Punkt, die Frage wurde falsch beantwortet."
            onPress={tapOnScreen}
          >
            <Text style={styles.buttonText}>0 Punkte</Text>
          </Pressable>
          <Pressable
            style={styles.countButton}
            accessibilityLabel="Ein Punkt, die Frage wurde unvollständig aber vom Grundsatz her richtig beantwortet."
            onPress={() => {
              setPoints(points + 1);
              tapOnScreen();
            }}
          >
            <Text style={styles.buttonText}>1 Punkte</Text>
          </Pressable>
          <Pressable
            style={styles.countButton}
            accessibilityLabel="Zwei Punkte, die Frage wurde vollständig & richtig beantwortet."
            onPress={() => {
              setPoints(points + 2);
              tapOnScreen();
            }}
          >
            <Text style={styles.buttonText}>2 Punkte</Text>
          </Pressable>
        </View>
      </SafeAreaProvider>
    );
  else
    return (
      <TouchableOpacity style={styles.touchableOpacity} onPress={tapOnScreen}>
        <Text style={styles.headline}>Frage {it}/15:</Text>
        <Text style={styles.largeCenteredText}>{stateQuestion}</Text>
        <Text style={styles.headline}>Antwort:</Text>
        <Text style={styles.largeCenteredText}>{stateAnswer}</Text>
      </TouchableOpacity>
    );
}