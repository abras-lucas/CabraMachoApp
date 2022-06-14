import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import { AppRegistry, SafeAreaView, TouchableOpacity } from 'react-native-web';
import { Modalize } from 'react-native-modalize';

export default function BotaoFlutuante({ func }) {

    const modalizeRef = useRef(null)

    function onOpen() {
        modalizeRef.current?.open()
    }

    return <View>
        <TouchableOpacity onPress={onOpen} style={styles.container}>
            <Icon
                name="plus"
                size={15}
                color="white"
            />
            <Modalize ref={modalizeRef} snapPoint={560}>
                <View style={styles.item}>
                    <Text>
                        TESTE
                    </Text>
                </View>
            </Modalize>
        </TouchableOpacity>
    </View>
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
    },
    item: {
        padding: '1em',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1
    }
})