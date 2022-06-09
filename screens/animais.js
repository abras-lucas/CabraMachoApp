import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';
import { AppRegistry, SafeAreaView } from 'react-native-web';
import Animal from '../components/Animal';

export default function Animais({ navigation, route }) {
    const [animais, setAnimais] = useState([])
    const [id, setId] = useState('')
    const [code, setCode] = useState('')
    const [breed, setBreed] = useState('')
    const [food, setFood] = useState('')
    const [birth, setBirth] = useState('')

    const { token, curral_id } = route.params

    useEffect(() => {
        loadAnimais()
    }, [])

    const clearInputs = () => {
        setId('')
        setCode('')
        setBreed('')
        setFood('')
        setBirth('')
    }

    const loadAnimais = () => {
        api.get(`/corrals/${curral_id}/animals/`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            setAnimais(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const addAnimal = () => {
        /* if (!name) {
            alert('Preencha o campo nome!')
            return
        }*/

        if (!id) {
            api.post(`/corrals/${curral_id}/animals/`, { code, breed, food, birth }, {
                headers: {
                    Authorization: token
                }
            }).then((res) => {
                // console.log(res.data)
                if (res.data) {
                    const animal = {
                        id: res.data.id,
                        code,
                        breed,
                        food,
                        birth
                    }

                    const animais_ = [...animais, animal]
                    setAnimais(animais_)
                }
            }).catch((err) => {
                console.log(err)
            })
        } else {
            api.put(`/corrals/${curral_id}/animals/${id}`, { code, breed, food, birth }, {
                headers: {
                    Authorization: token
                }
            })
                .then((res) => res.data)
                .then((res) => {
                    if (res.success) {
                        const animais_ = [...animais]
                        animais_.forEach((animal_) => {
                            if (animal_.id === id) {
                                animal_.code = code,
                                    animal_.breed = breed,
                                    animal_.food = food,
                                    animal_.birth = birth
                            }
                        })
                        setAnimais(animais_)
                    }
                }).catch((err) => {
                    console.log(err)
                })
        }

        clearInputs()
        
    }

    const removeAnimal = (animal) => {
        console.log(`Deletei o animal ${animal.id}`)
        api.delete(`/corrals/${curral_id}/animals/${animal.id}`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            console.log(res.data)
            const animais_ = animais.filter((animal_) => animal_.id !== animal.id)
            setAnimais(animais_)
        }).catch((err) => {
            console.log(err)
        })
    }

    const editAnimal = (animal) => {
        setId(animal.id)
        setCode(animal.code)
        setBreed(animal.breed)
        setFood(animal.food)
        setBirth(animal.birth)
    }

    return <SafeAreaView styles={{ flex: 1 }}>
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
            onPress={addAnimal}
        />
        <FlatList
            data={animais}
            renderItem={({ item }) => <Animal
                animal={item}
                editAnimal={editAnimal}
                removeAnimal={removeAnimal}
            />}
            keyExtractor={(item) => item.id}
        />
    </SafeAreaView>

}

const styles = StyleSheet.create({
    item: {
        padding: '1em',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1
    },
    icon: {
        fontSize: 25,
        marginEnd: '0.5em'
    },
    name: {
        fontSize: 20
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    }
})