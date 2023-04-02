import * as React from "react";

import { Text, TouchableOpacity } from "react-native";

import { randomIdx } from "./Tools";
import { styles } from "../constants/Styles";
import { questions, answers } from "../constants/QaA";


export function FragenkatalogScreen({ route, navigation }: { route: any, navigation: any }) {
  const { itemId } = route.params;

  const [firstTap, setFirstTap] = React.useState(false);
  const [it, setIt] = React.useState(itemId);
  const [stateQuestion, setStateQuestion] = React.useState(questions.get(itemId));
  const [stateAnswer, setStateAnswer] = React.useState(answers.get(60));

  function tapOnScreen() {
    setFirstTap(!firstTap);
  }

  React.useEffect(() => {
    if (firstTap) {
      setStateAnswer(answers.get(it));
    } else {
      setIt(randomIdx());
    }
  }, [firstTap]);

  React.useEffect(() => {
    setStateQuestion(questions.get(it));
    setStateAnswer(answers.get(60));
  }, [it]);

  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={tapOnScreen}>
      <Text style={styles.headline}>Frage {it + 1}:</Text>
      <Text style={styles.largeCenteredText}>{stateQuestion}</Text>
      <Text style={styles.headline}>Antwort:</Text>
      <Text style={styles.largeCenteredText}>{stateAnswer}</Text>
    </TouchableOpacity>
  );
}