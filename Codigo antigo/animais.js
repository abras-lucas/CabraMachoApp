import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, Input, Text, buttonStyle } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';

const Animal = ({ animal, handleRemove }) => (
    <View style={styles2.animalContainer}>
        <View style={styles2.animalInfo}>
            <Text style={styles2.animalInfoHeader}>CODIGO</Text>
            <Text style={styles2.animalInfoValue}>{animal.id}</Text>
        </View>
        <View style={styles2.animalInfo}>
            <Text style={styles2.animalInfoHeader}>RAÇA</Text>
            <Text style={styles2.animalInfoValue}>{animal.race}</Text>
        </View>
        <View style={styles2.animalInfo}>
            <Text style={styles2.animalInfoHeader}>IDADE</Text>
            <Text style={styles2.animalInfoValue}>{animal.age}</Text>
        </View>
        <View style={styles2.animalInfo}>
            <Text style={styles2.animalInfoHeader}>RAÇÃO</Text>
            <Text style={styles2.animalInfoValue}>{animal.food}</Text>
        </View>
        <Button style={styles2.removeAnimal}
            title={"X"}
            onPress={() => handleRemove(animal.id)}
        />
    </View>
)

export default function Animais({ navigation, route }) {
    alert(route.params.curral_id)

    const [animais, setAnimais] = useState(route.params.animais)

    const removeAnimal = (idAnimal) => {
        route.params.handleRemoveAnimal(route.params.idCurral, idAnimal)
        setAnimais(route.params.getAnimais())
    }

    const addAnimal = () => {
        route.params.handleAddAnimal(route.params.idCurral)
        setAnimais(route.params.getAnimais())
    }

    const renderItem = ({ item }) => {
        return (
            <Animal
                animal={item}
                handleRemove={removeAnimal}
            />
        )
    }

    return (
        <View>
            <Button
                title={"Adicionar Animal"}
                onPress={addAnimal}
            />
            <FlatList
                data={animais}
                renderItem={renderItem}
                keyExtractor={(animal) => animal.id}
            />
        </View>
    );
}

const styles2 = StyleSheet.create({
    animalContainer: {
        padding: '10px',
        marginTop: '5px',
        marginRight: '10px',
        marginBottom: '5px',
        marginLeft: '10px',
        backgroundColor: 'white',
        borderRadius: 8,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },


    animalInfoHeader: {
        fontSize: 10,
        fontWeight: 700,

    }
})