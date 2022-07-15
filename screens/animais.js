import React, { useEffect, useState, useContext, useRef } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Text, Button, Input } from 'react-native-elements'
import api from '../services/api';
import AnimalItem from '../components/AnimalItem';
import { AuthContext } from '../contexts/auth'
import AnimalModal from '../components/AnimalModal';

function Empty({ mensagem }) {
    return <View style={styles.empty}>
        <Text style={styles.text}>
            {mensagem}
        </Text>
    </View>
}

export default function Animais({ navigation, route }) {
    const [animais, setAnimais] = useState([])
    const [id, setId] = useState('')
    const [code, setCode] = useState('')
    const [breed, setBreed] = useState('')
    const [food, setFood] = useState('')
    const [birth, setBirth] = useState('')

    const { token, modalAnimais, onOpenModalAnimais } = useContext(AuthContext)

    const { curral_id } = route.params

    useEffect(() => {
        loadAnimais()
    }, [])

    function onEditAnimal(animal) {
        setId(animal.id)
        setCode(animal.code)
        setBreed(animal.breed)
        setFood(animal.food)
        setBirth(animal.birth)
        modalAnimais.current?.open()
    }

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

    return <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            {animais.length === 0 ? <Empty mensagem={'Sem Animais'} /> :
                <FlatList
                    data={animais}
                    renderItem={({ item }) => <AnimalItem
                        animal={item}
                        editAnimal={() => { onEditAnimal(item) }}
                        removeAnimal={removeAnimal}
                        onPress={() => { navigation.navigate("Detalhes do Animal", { animal: item, curral_id }) }}
                    />}
                    keyExtractor={(item) => item.id}
                />
            }

            <AnimalModal
                refModal={modalAnimais}
                addAnimal={addAnimal}
                id={id}
                setId={setId}
                code={code}
                setCode={setCode}
                breed={breed}
                setBreed={setBreed}
                food={food}
                setFood={setFood}
                birth={birth}
                setBirth={setBirth}
            />
        </View>

    </SafeAreaView>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5
    },
    empty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        color: '#191629'
    },
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