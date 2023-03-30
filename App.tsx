import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ScrollView, StyleSheet, Text, View, Button, TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';


const width = '99%';
const margin = '0.1%';

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#dc143c'
  },
  item: {
    height: 40,
    width: width,
    margin: margin,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  headline: {
    width: width,
    margin: margin,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    width: width,
    margin: margin,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    fontSize: 18,
    textAlign: 'center',
  },
  link: {
    textAlign: 'center',
    color: 'blue'
  },
  linkBox: {
    height: 40,
    width: width,
    margin: margin,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    textAlign: 'center'
  },
  button: {
    height: 40,
    width: width,
    margin: margin,
    borderWidth: 1,
    textAlign: 'center'
  },
  dropDown: {
    width: width,
    borderWidth: 1,
    textAlign: 'center'
  },
  container: {
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
  },
});

const questions = new Map<number, string>([
  [0, "Was versteht man unter pyrotechnischen Seenotsignalen?"],
  [1, "Was sind explosionsgefährliche Stoffe?"],
  [2, "Wann dürfen pyrotechnische Notsignale verwendet werden?"],
  [3, "Was darf zur pyrotechnischen Notsignalgebung verwendet werden?"],
  [4, "Wer benötigt in der Regel einen kleinen Waffenschein?"],
  [5, "Was ist sicherheitstechnisch bei der Verwendung einer Seenot-Handfackel zu beachten?"],
  [6, "Was ist bei der Verwendung von Seenot-Rauchsignalen zu beachten?"],
  [7, "Welche pyrotechnischen Seenot-Signalmittel werden an Bord verwendet?"],
  [8, "Wann werden Notsignale verwendet?"],
  [9, "Wann sind Rauchsignale zu verwenden?"],
  [10, "Welche Farbe ist bei Signalraketen international als Notsignal zu verwenden? a) Rot. b) Weiß. c) Grün."],
  [11, "Wann dürfen Notsignale verwendet werden? a) In Notfällen, wenn unter anderem Leib und Leben von Personen in Gefahr sind und dringend fremde Hilfe benötigt wird. b) In Notfällen, wenn bedeutende Sachwerte in Gefahr sind und dringend fremde Hilfe benötigt wird. c) Ausschließlich, wenn alle anderen Kommunikationsmittel ausgefallen sind."],
  [12, "Wie lang ist die Verbrauchsdauer pyrotechnischer Notsignale bei sachgemäßer Lagerung?"],
  [13, "Was verkürzt die durch den Hersteller vorgegebene Verbrauchsdauer pyrotechnischer Notsignale oder beeinträchtigt ihre sichere Verwendung?"],
  [14, "Was machen Sie mit überlagerten pyrotechnischen Notsignalen?"],
  [15, "Welche Signalwaffen darf der Inhaber eines Kleinen Waffenscheins führen? a) Alle. b) Nur amtlich beschossene Signalwaffen im Kaliber unter 12 mm. c) Nur Signalwaffen mit dem Zulassungszeichen 'PTB im Kreis'"],
  [16, "Wie sind pyrotechnische Seenotsignale während der Fahrt aufzubewahren?"],
  [17, "Welche Signalwaffen können frei erworben und an Bord mitgeführt werden?"],
  [18, "Wozu berechtigt eine Waffenbesitzkarte?"],
  [19, "Wo ist eine Waffenbesitzkarte zu beantragen?"],
  [20, "Worüber sollten Sie sich sofort nach dem Erwerb pyrotechnischer Seenotsignale informieren?"],
  [21, "Welche Hinweise finden sich auf den pyrotechnischen Seenotsignalen?"],
  [22, "Welche pyrotechnischen Seenotsignale können erlaubnisfrei erworben, aufbewahrt und verwendet werden?"],
  [23, "Welche erlaubnispflichtigen pyrotechnischen Seenotsignale dürfen Wassersportler mit einem im Führerschein eingedruckten Befreiungsvermerk bzw. Fachkundenachweis erwerben?"],
  [24, "Wie können pyrotechnische Seenotsignale erworben werden?"],
  [25, "Welche Signalmittel sind für jedermann frei erhältlich? a) Knicklichter / Leuchtstäbe. b) Signalpfeifen. c) Pressluftfanfaren."],
  [26, "a) Welche Signalwaffen können erlaubnisfrei erworben werden? b) Dürfen diese zugriffsbereit geführt werden?"],
  [27, "Nennen Sie vier pyrotechnische Notsignale!"],
  [28, "Welche Farben haben pyrotechnische Notsignale?"],
  [29, "Was ist bei allen steigenden Seenotsignalen unbedingt zu beachten?"],
  [30, "Was ist bei steigenden Notsignalen zu beachten? a) Freies Schussfeld. b) Windrichtung und Abschusswinkel. c) Keine entflammbaren Gegenstände im Gefahrenbereich."],
  [31, "Worin liegt die besondere Gefährlichkeit pyrotechnischer Signalsätze?"],
  [32, "Welche Vorteile haben Signalraketen bzw. Signalpatronen, die mit Fallschirmen ausgerüstet sind, gegenüber Signalsternen?"],
  [33, "Woraufhin sind pyrotechnische Seenotsignale ständig zu überwachen, damit die Funktionsfähigkeit gewährleistet ist?"],
  [34, "Woran erkennen Sie an einem pyrotechnischen Notsignal, um welche Unterklasse es sich handelt?"],
  [35, "Wer darf pyrotechnische Notsignale verwenden?"],
  [36, "Wie lang ist die Brenndauer einer Seenot-Handfackel?"],
  [37, "Wozu berechtigt der kleine Waffenschein?"],
  [38, "Was wissen Sie über Steighöhe und Brenndauer von Signalraketen?"],
  [39, "Fallschirmsignalraketen und Handfackeln sind unterschiedlich weit zu sehen. Welche Signale verwenden Sie den Umständen entsprechend?"],
  [40, "Wie hoch steigen Seenotsignalraketen bei senkrechtem Abschusswinkel? a) Bis zu 50 Metern. b) Bis zu 300 Metern. c) Bis zu 200 Metern."],
  [41, "Brennen pyrotechnische Leuchtsätze weiter, wenn sie ins Wasser fallen? a) Nein. b) Nur, wenn es sich um militärische Munition handelt. c) Ja."],
  [42, "Dürfen Sie pyrotechnische Gegenstände selbst herstellen und bearbeiten?"],
  [43, "Wer darf pyrotechnische Gegenstände herstellen und bearbeiten?"],
  [44, "Welche pyrotechnischen Notsignale unterliegen dem Waffengesetz?"],
  [45, "Welche pyrotechnischen Seenotsignale unterliegen dem Sprengstoffgesetz?"],
  [46, "Was regelt das Sprengstoffgesetz?"],
  [47, "Welche Bestimmung regelt den Einsatz von Notsignalen auf See?"],
  [48, "Welche Vorschrift regelt die Pflicht zur Hilfeleistung in Seenotfällen?"],
  [49, "Welche nautische Veröffentlichung (Broschüre) beschreibt die seemännische Sorgfaltspflicht für Wassersportler, auch für den Seenotfall? Wer gibt sie heraus?"],
  [50, "Welche nautische Veröffentlichung (Handbuch) für die Sport- und Kleinschifffahrt enthält Anleitungen zur Bewältigung von Notlagen auf See? Wer gibt sie heraus?"],
  [51, "Welche pyrotechnischen Signalmittel unterliegen dem Waffengesetz? a) Alle Leuchtraketen, die einen eigenen Treibsatz beinhalten. b) Alle Signalpistolen sowie die für diese bestimmte Munition. c) Alle steigenden Signale, die einen Durchmesser von mehr als 12 mm aufweisen."],
  [52, "Welche pyrotechnischen Signalmittel unterliegen dem Sprengstoffgesetz? a) Handfackeln und Rauchkörper. b) Handsignalraketen mit Fallschirm. c) Blitz-Knall-Patronen im Kaliber 4."],
  [53, "Dürfen Sie Seenotsignalmittel in öffentlichen Verkehrsmitteln befördern?"],
  [54, "Wem dürfen Sie Seenotsignale dauerhaft überlassen?"],
  [55, "Wem dürfen Sie ohne Erlaubnis die Signalpistole im Kaliber 4 (26,5 mm) nebst Munition vorübergehend über-lassen? a) Volljährigen Personen meines Vertrauens zur sicheren Aufbewahrung. b) Polizeibeamten (nicht dienstlich tätig). c) Charterern von seegehenden Wasserfahrzeugen, sofern der Besitz über die Waffe nach meinen Weisungen erfolgt."],
  [56, "Was müssen Sie tun, wenn Ihnen Signalmittel oder Waffen abhanden kommen?"],
  [57, "Wer darf in Seenotfällen mit einer Signalwaffe schießen? a) Jeder. b) Nur Inhaber einer Waffensachkundeprüfung. c) Nur der verantwortliche Führer des betroffenen Wasserfahrzeuges."],
  [58, "Welche Ausnahme von den waffenrechtlichen Erlaubnispflichten für Waffen und Munition betrifft den Charterer einer seegehenden Yacht?"],
  [59, "Welche Behörde prüft pyrotechnische Seenotsignale und lässt sie zu?"]
]);

const answers = new Map<number, string>([
  [0, "Notsignale, die mit Hilfe explosionsgefährlicher Stoffe ausgelöst werden."],
  [1, "Feste oder flüssige Stoffe und Zubereitungen, die durch eine nicht außergewöhnliche Beanspruchung (thermisch, mechanisch oder andere) zur Explosion gebracht werden können."],
  [2, "Nur im Notfall, d. h. unter anderem, wenn angezeigt werden soll, dass Gefahr für Leib und Leben besteht und Hilfe erforderlich ist."],
  [3, "Die Signalpistole Kaliber 4 (26,5 mm) und die von der PhysikalischTechnischen Bundesanstalt (PTB) zugelassenen Signalwaffen einschließlich Munition bzw. die von der Bundesanstalt für Materialforschung und -prüfung (BAM) zugelassenen sonstigen Notsignale."],
  [4, "Wer außerhalb seiner Wohnung, Geschäftsräume oder seines befriedeten Besitztums eine Schusswaffe mit dem Bauartzulassungszeichen 'PTB im Kreis' führen möchte (PTB = Physikalisch-Technische Bundesanstalt)."],
  [5, "Gebrauchsanweisung beachten. In jedem Fall die brennende Fackel nach Lee so halten, dass versprühter Abbrand keine Verletzungen (Hand, Augen) verursacht oder die Yacht beschädigt."],
  [6, "Rauchsignale nur am Tage und bei geringen Windstärken verwenden. Die Anzündung erfolgt durch eine Reißschnur, die unter einer abschraubbaren Schutzkappe liegt. Nach der Zündung ist das Rauchsignal zur Leeseite außenbords zu werfen."],
  [7, "Signalraketen, Fallschirmraketen, Handfackeln und Rauchsignale."],
  [8, "Im Notfall, wenn Hilfe erforderlich ist."],
  [9, "Nur am Tag und erst wenn Hilfe gesichtet worden ist."],
  [10, "a) Rot."],
  [11, "a) In Notfällen, wenn unter anderem Leib und Leben von Personen in Gefahr sind und dringend fremde Hilfe benötigt wird. b) In Notfällen, wenn bedeutende Sachwerte in Gefahr sind und dringend fremde Hilfe benötigt wird."],
  [12, "Soweit auf dem einzelnen Gegenstand nichts anderes vermerkt ist, max. 3 Jahre."],
  [13, "1. Feuchtigkeit, 2. Korrosion, 3. hohe Lagertemperaturen, mechanische Beschädigungen."],
  [14, "Über den Handel zurückgeben oder Delaborierbetrieben übergeben (Keinesfalls als Feuerwerkskörper verwenden)."],
  [15, "c) Nur Signalwaffen mit dem Zulassungszeichen 'PTB im Kreis'."],
  [16, "1. Kühl und trocken, 2. Leicht zugänglich in unverschlossenen Behältern."],
  [17, "Signalwaffen mit dem Bauartzulassungszeichen der PhysikalischTechnischen Bundesanstalt 'PTB im Kreis'."],
  [18, "Mit entsprechendem Voreintrag zum Erwerb, sowie zum Besitz einer Signalpistole und zum Erwerb der dazugehörigen Munition bei entsprechendem Eintrag."],
  [19, "Bei der zuständigen Behörde des Wohnortes (nicht des Liegeplatzes)."],
  [20, "Gebrauchsanweisung sorgfältig bis zum Ende lesen – nicht erst im Notfall."],
  [21, "Anweisungen über die Handhabung und den Verbrauchszeitraum."],
  [22, "Die der Unterklasse T1, d.h. 'Handfackeln rot' und bestimmte Rauchsignale, Abschussgeräte ohne Schusswaffeneigenschaft, von jedem, der das 18. Lebensjahr vollendet hat."],
  [23, "Die der Unterklasse T2, d.h. 'Signalraketen rot', 'Fallschirmsignalraketen rot', und bestimmte Rauchsignale."],
  [24, "Durch Kauf oder Überlassung unter Vorlage der jeweiligen Erwerbsberechtigung."],
  [25, "a) Knicklichter / Leuchtstäbe. b) Signalpfeifen. c) Pressluftfanfaren."],
  [26, "a) Signalwaffen mit dem Bauartzulassungszeichen 'PTB im Kreis' (PTB = Physikalisch-Technische Bundesanstalt). b) Das Führen ist nur mit dem Kleinen Waffenschein erlaubt."],
  [27, "1. Signalraketen, rot. 2. Fallschirmsignalraketen, rot. 3. Handfackeln, rot. 4. Rauchsignale, orange."],
  [28, "Rot und orange."],
  [29, "1. Auf freies Schussfeld achten (z.B. Mast und Segel), 2. Signalgerät senkrecht (ggf. in den Wind geneigt) nach oben halten, 3. beim Handhaben und Abfeuern nicht auf Personen richten und selbst nicht mit Körperteilen oder Kleidung vor die Mündung kommen, nicht an Versagern hantieren, sondern diese über Bord werfen."],
  [30, "a) Freies Schussfeld. b) Windrichtung und Abschusswinkel. c) Keine entflammbaren Gegenstände im Gefahrenbereich."],
  [31, "Es besteht Explosions-, Feuer- und Verletzungsgefahr. Sie brennen auch im Wasser weiter."],
  [32, "Auf Grund geringerer Sinkgeschwindigkeit (5 m/s) ist eine längere Brenndauer möglich; dadurch haben sie einen höheren Aufmerksamkeitswert."],
  [33, "1. Verbrauchsdauer / Verfallsdatum beachten, 2. auf Korrosion oder Beschädigung achten."],
  [34, "Am Zulassungszeichen: BAM-PT1 oder BAM-PT2."],
  [35, "Jeder, der damit anzeigen will, dass ein Seenotfall vorliegt, d. h. unter anderem, dass Gefahr für Leib oder Leben der Besatzung und daher die Notwendigkeit zur Hilfe besteht."],
  [36, "Ihre Brenndauer beträgt 30 bis 60 Sekunden."],
  [37, "Zum Führen von Schreckschuss-, Reizstoff- und Signalwaffen, deren Erwerb und Besitz erlaubnisfrei sind."],
  [38, "Steighöhe bis 300 m, Brenndauer bis zu 30 Sekunden."],
  [39, "Fallschirmsignalraketen, um weit entfernte Helfer auf eine Notlage aufmerksam zu machen und grob in die Richtung einzuweisen. Handfackeln, um die genaue Position bei Annäherung kenntlich zu machen."],
  [40, "b) Bis zu 300 Metern."],
  [41, "c) Ja."],
  [42, "Nein, nur als Inhaber einer entsprechenden Erlaubnis nach dem Sprengstoffgesetz."],
  [43, "Nur Inhaber einer speziellen Erlaubnis nach dem Sprengstoffgesetz."],
  [44, "Die Signalpistole Kaliber 4 (26,5 mm) und die hierfür bestimmte Munition."],
  [45, "Alle pyrotechnischen Seenotsignale, die nicht aus einer Signalpistole abgefeuert werden, wie Signalraketen, Handsignalraketen mit Fallschirm, Handfackeln und Rauchsignale."],
  [46, "Den Umgang mit explosionsgefährlichen Stoffen."],
  [47, "Kollisionsverhütungsregeln (KVR; Regel 37)."],
  [48, "Verordnung über die Sicherung der Seefahrt."],
  [49, "Die Broschüre 'Sicherheit im See- und Küstenbereich', herausgegeben vom Bundesamt für Seeschifffahrt und Hydrographie (BSH)."],
  [50, "Das Handbuch 'Suche und Rettung', herausgegeben vom Bundesamt für Seeschifffahrt und Hydrographie (BSH)."],
  [51, "b) Alle Signalpistolen sowie die für diese bestimmte Munition."],
  [52, "a) Handfackeln und Rauchkörper. b) Handsignalraketen mit Fallschirm."],
  [53, "Nein."],
  [54, "Nur berechtigten Personen im Sinne des Waffen- oder Sprengstoffrechts."],
  [55, "c) Charterern von seegehenden Wasserfahrzeugen, sofern der Besitz über die Waffe nach meinen Weisungen erfolgt."],
  [56, "Den Verlust der zuständigen Behörde unverzüglich anzeigen."],
  [57, "a) Jeder."],
  [58, "Der Charterer darf ohne waffenrechtliche Erlaubnis die tatsächliche Gewalt über eine an Bord befindliche Signalpistole im Kaliber 4 (26,5 mm) und die dazugehörige Munition ausüben."],
  [59, "Die Bundesanstalt für Materialforschung und -prüfung (BAM)."],
  [60, "..."]
]);

function randomIdx() {
  return Math.floor(Math.random() * 100) % 60;
}

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden/>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.text}>
            Infos über die App & FKN Resourcen Stand etc.
          </Text>
          <Text style={styles.text}>
            Idee der App & die angedachte Verwendung.
          </Text>
          <Text style={styles.text}>
            Wenn alles andere fertig ist: Prüfungsbögen jeweils als ein Button.
          </Text>
          <Text style={styles.text}>
            Alle Fragen randomisiert.
          </Text>
          <Button
            title="Fragenkatalog"
            accessibilityLabel="Zufällige Folge von Fragen aus dem Fragenkatalog."
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("Fragenkatalog", {
                itemId: randomIdx()
              });
            }}
          />
          <Text style={styles.text}>
            Ganz zum Schluss, wenn ich noch Bock habe: Statistik über wie oft die Antworten der Fragen aufgedeckt wurden.
          </Text>
          <Text style={styles.text}>
            Gewährleistungsausschluss.
          </Text>
          <Text style={styles.text}>
            Copyright, Impressum & Datenschutz.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

function FragenkatalogScreen({ route, navigation }: { route: any, navigation: any }) {
  /* 2. Get the param */
  const { itemId } = route.params;

  const [it, setIt] = React.useState(itemId);
  const [firstTap, setFirstTap] = React.useState(false);
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
    <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }} onPress={tapOnScreen}>
      <Text style={styles.headline}>Frage {it + 1}:</Text>
      <Text style={styles.text}>{stateQuestion}</Text>
      <Text style={styles.headline}>Antwort:</Text>
      <Text style={styles.text}>{stateAnswer}</Text>
    </TouchableOpacity>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="Fragenkatalog"
          component={FragenkatalogScreen}
          initialParams={{ itemId: 0 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;