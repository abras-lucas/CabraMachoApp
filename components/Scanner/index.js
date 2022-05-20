import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Scanner({ navigation, route }) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text h4>Scaneador ficará aqui!</Text>
    </View>
}