import React, { useEffect, useState, useContext, useRef } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import { AppRegistry, SafeAreaView } from 'react-native-web';
import Curral from '../Curral';
import BotaoFlutuante from '../BotaoFlutuante'
import { AuthContext } from '../../contexts/auth'
import { Modalize } from 'react-native-modalize';

export default function AnimalModal({ addAnimal, refModal, idAnimal, code, setCode,
    breed, setBreed,
    food, setFood,
    birth, setBirth }) {

    const onAddAnimal = () => {
        addAnimal()
        refModal.current?.close()
    }

    return <Modalize ref={refModal} snapPoint={360}>
        <View style={styles.container}>
            <Text style={styles.title}>Animais</Text>
            <Input
                value={code}
                placeholder="Codigo do animal:"
                leftIcon={{ type: 'font-awesome', name: 'list' }}
                onChangeText={value => setCode(value)}
                keyboardType="email-address"
            />
            <Input
                value={breed}
                placeholder="Raça do animal:"
                leftIcon={{ type: 'font-awesome', name: 'list' }}
                onChangeText={value => setBreed(value)}
                keyboardType="email-address"
            />
            <Input
                value={food}
                placeholder="Ração do animal:"
                leftIcon={{ type: 'font-awesome', name: 'list' }}
                onChangeText={value => setFood(value)}
                keyboardType="email-address"
            />
            <Input
                value={birth}
                placeholder="Data de nascimento do animal:"
                leftIcon={{ type: 'font-awesome', name: 'list' }}
                onChangeText={value => setBirth(value)}
                keyboardType="email-address"
            />
            <Button
                icon={
                    <Icon
                        name="plus"
                        size={15}
                        color="white"
                    />
                }
                onPress={onAddAnimal}
            />
        </View>
    </Modalize>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        padding: 10,
        textTransform: 'capitalize',
        fontSize: 18,
        textAlign: 'center'
    }
})