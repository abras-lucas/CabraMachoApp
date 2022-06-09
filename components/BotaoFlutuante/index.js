import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import { AppRegistry, SafeAreaView, TouchableOpacity } from 'react-native-web';
import Curral from '../Curral';

export default function BotaoFlutuante({ func }) {
    return <TouchableOpacity style={styles.container}>
        <Icon
            name="plus"
            size={15}
            color="white"
        />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: 'black',
        padding: '2em',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0.5,
        width: '50px',
        height: '50px'
    }
})