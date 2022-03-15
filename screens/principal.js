import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import animais from './animais';

function Currais() {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <Text h4>
        Curral 1
        <Button
        icon={
          <Icon
            name="plus"
            size={15}
            color="white"
          />
        }
        //title=" Salvar"
        //buttonStyle={styles.button}
        onPress={() => navigation.navigate("Animais")}
      />
      </Text>
    </View>
  );
}

function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text h4>Perfil!</Text>
    </View>
  );
}

function Scaner() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text h4>Scaneador ficará aqui!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function principal(navigation) {
  return (
    <Tab.Navigator
      initialRouteName="Currais"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Currais"
        component={Currais}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="barn" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scaner"
        component={Scaner}
        options={{
          tabBarLabel: 'Scaner',
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