import React, { useState, useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/mainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Principal from './screens/Principal';
import Cadastro from './screens/Cadastro';
import Animais from './screens/Animais';
import Animal from './screens/Animal';
import AuthProvider from './contexts/auth';
import { AuthContext } from './contexts/auth'

const Stack = createStackNavigator();

function MyStack() {

  const { onOpenModalAnimais } = useContext(AuthContext)

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} /*options={{headerShown:false}}*/ />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Animais" component={Animais} options={{
        headerRight: () => (
          <View style={{ marginRight: 10 }} >
            <Button
              onPress={onOpenModalAnimais}
              title="Adicionar"
              color="#000"
            />
          </View>
        ),
      }} />
      <Stack.Screen name="Detalhes do Animal" component={Animal} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MyStack />
      </AuthProvider>
    </NavigationContainer>
  );
}