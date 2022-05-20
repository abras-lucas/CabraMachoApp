import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import animais from './animais';
import api from '../services/api';
import Scanner from '../components/Scanner';
import Currais from '../components/Currais';

export default function principal({ navigation, route }) {

  const Tab = createBottomTabNavigator();

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
        children={() => <Currais navigation={navigation} route={route} />}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="barn" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        // component={Scanner}
        children={() => <Scanner navigation={navigation} route={route} />}
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