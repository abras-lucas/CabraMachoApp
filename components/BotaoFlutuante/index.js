import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import { AppRegistry, SafeAreaView } from 'react-native-web';
import { Modalize } from 'react-native-modalize';

export default function BotaoFlutuante({ func, absolute=true }) {

    return <View>
        <TouchableOpacity onPress={func} style={[styles.container, absolute ? styles.absolute : styles.notAbsolute]}>
            <Icon
                name="plus"
                size={15}
                color="white"
            />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    notAbsolute: {
        position: 'absolute',
        right: 10,
        bottom: -100,
    },
    container: {
        backgroundColor: 'black',
        padding: '2em',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0.5,
        width: '50px',
        height: '50px',
    }
})