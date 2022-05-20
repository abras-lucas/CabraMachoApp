import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Currais({ navigation, route }) {
    const [currais, setCurrais] = useState([])

    const addAnimal = (idCurral) => {

        const currais_ = [...currais]
        const index = currais_.findIndex((curral) => curral.id === idCurral)
        const animal = {
            id: currais_[index].animals.length + 1,
            race: `Tipo X${animais.length}`,
            age: 3,
            food: 'Estrela'
        }
        currais_[index].animals = [...currais_[index].animals, animal]
        setCurrais(currais_)
    }

    const removeAnimal = (idCurral, idAnimal) => {
        const currais_ = [...currais]
        currais_.forEach((curral) => {
            if (curral.id === idCurral) {
                curral.animals = curral.animals.filter((animal) => animal.id != idAnimal)
            }
        })

        setCurrais(currais_)
    }

    const getAnimais = () => {
        return currais[0].animals
    }

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
                    onPress={() => navigation.navigate("Animais", {
                        animais: currais[0].animals,
                        idCurral: currais[0].id,
                        getAnimais: getAnimais,
                        handleAddAnimal: addAnimal, // (idCurral) => this.addAnimal(idCurral),
                        handleRemoveAnimal: removeAnimal // (idCurral, idAnimal) => this.removeAnimal(idCurral, idAnimal),
                    })}
                />
            </Text>
        </View>
    );
}