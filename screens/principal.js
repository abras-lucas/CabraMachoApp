import React, { useState, useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import animais from './Animais';
import api from '../services/api';
import Scanner from '../components/Scanner';
import Currais from '../components/Currais';
import { AuthContext } from '../contexts/auth'

export default function Principal({ navigation, route }) {

  const Tab = createBottomTabNavigator();
  const { onOpenModalCurrais } = useContext(AuthContext)

  return (
    <Tab.Navigator
      initialRouteName="Currais"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Currais"
        // component={Currais}
        children={() => <Currais navigation={navigation} />}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="barn" color={color} size={size} />
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }} >
              <Button
                onPress={onOpenModalCurrais}
                title="Adicionar"
                color="#000"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        // component={Scanner}
        children={() => <Scanner navigation={navigation} />}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="overscan" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text h4>Perfil!</Text>
    </View>
  );
}