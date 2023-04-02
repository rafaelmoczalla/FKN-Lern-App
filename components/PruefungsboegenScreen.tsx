import * as React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { styles } from '../constants/Styles';
import { questions, answers } from '../constants/QaA';


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

export function PruefungsboegenScreen({ route, navigation }: { route: any, navigation: any }) {
  const { itemId } = route.params;

  const [endOfExam, setEndOfExam] = React.useState(false);
  const [firstTap, setFirstTap] = React.useState(false);

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
  }, [firstTap]);

  React.useEffect(() => {
    setStateQuestion(questions.get(qId));
    setStateAnswer(answers.get(60));
  }, [qId]);

  if (endOfExam)
    return(
      <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }} onPress={tapOnScreen}>
        <Text style={styles.headline}>Geschafft!</Text>
        <Text style={styles.headline}>Ende des Prüfungsbogens erreicht!</Text>
      </TouchableOpacity>
    )
  else
    return (
      <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }} onPress={tapOnScreen}>
        <Text style={styles.headline}>Frage {it}/15:</Text>
        <Text style={styles.centeredText}>{stateQuestion}</Text>
        <Text style={styles.headline}>Antwort:</Text>
        <Text style={styles.centeredText}>{stateAnswer}</Text>
      </TouchableOpacity>
    );
}