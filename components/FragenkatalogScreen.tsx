import * as React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { randomNumber } from "./Tools";
import { styles } from "../constants/Styles";
import { questions, answers } from "../constants/QaA";


export function FragenkatalogScreen({ route, navigation }: { route: any, navigation: any }) {
  const { itemId } = route.params;

  const [firstTap, setFirstTap] = React.useState(false);
  const [it, setIt] = React.useState(itemId);
  const [stateQuestion, setStateQuestion] = React.useState(questions.get(itemId));
  const [stateAnswer, setStateAnswer] = React.useState(answers.get(answers.size - 1));

  function tapOnScreen() {
    setFirstTap(!firstTap);
  }

  React.useEffect(() => {
    if (firstTap) {
      setStateAnswer(answers.get(it));
    } else {
      setIt(randomNumber(answers.size - 1));
    }
  }, [firstTap]);

  React.useEffect(() => {
    setStateQuestion(questions.get(it));
    setStateAnswer(answers.get(answers.size - 1));
  }, [it]);

  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={tapOnScreen}>
      <View style={styles.qaView}>
        <Text style={styles.headline}>Frage {it + 1}:</Text>
        <Text style={styles.largeCenteredText}>{stateQuestion}</Text>
        <Text style={styles.headline}>Antwort:</Text>
        <Text style={styles.largeCenteredText}>{stateAnswer}</Text>
      </View>
    </TouchableOpacity>
  );
}