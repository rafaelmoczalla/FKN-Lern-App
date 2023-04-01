import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './components/HomeScreen';
import { FragenkatalogScreen } from './components/FragenkatalogScreen';
import { PruefungsboegenScreen } from './components/PruefungsboegenScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "FKN nach SprengV" }}
        />
        <Stack.Screen
          name="Fragenkatalog"
          component={FragenkatalogScreen}
          initialParams={{ itemId: 0 }}
        />
        <Stack.Screen
          name="Pruefungsboegen"
          component={PruefungsboegenScreen}
          initialParams={{ itemId: 0 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;