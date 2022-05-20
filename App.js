import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/mainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from './screens/login';
import principal from './screens/principal';
import cadastro from './screens/cadastro';
import Animais from './screens/animais';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      {<Stack.Screen name="Login" component={login} />}
      <Stack.Screen name="Principal" component={principal} />
      <Stack.Screen name="Cadastro" component={cadastro} />
      <Stack.Screen name="Animais" component={Animais} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}