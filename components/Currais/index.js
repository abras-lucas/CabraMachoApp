import React, { useEffect, useState } from 'react';
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

export default function Currais({ navigation, route }) {
    const [currais, setCurrais] = useState([])
    const [name, setName] = useState('')

    useEffect(() => {
        loadCurrais()
    }, [])

    const loadCurrais = () => {
        api.get('/corrals', {
            headers: {
                Authorization: route.params.token
            }
        }).then((res) => {
            setCurrais(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const addCurral = () => {
        /* if (!name) {
            alert('Preencha o campo nome!')
            return
        }*/

        api.post('/corrals', { name }, {
            headers: {
                Authorization: route.params.token
            }
        }).then((res) => {
            // console.log(res.data)
            if (res.data) {
                const curral = {
                    id: res.data.id,
                    name
                }

                const currais_ = [...currais, curral]
                setCurrais(currais_)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    const removeCurral = (curral) => {
        console.log(`Deletei o curral ${curral.id}`)
        api.delete(`/corrals/${curral.id}`, {
            headers: {
                Authorization: route.params.token
            }
        }).then((res) => {
            console.log(res.data)
            const currais_ = currais.filter((curral_) => curral_.id !== curral.id)
            setCurrais(currais_)
        }).catch((err) => {
            console.log(err)
        })
    }

    const updateCurral = (curral, newName) => {
        /* if (!newName) {
            alert('Preencha o campo nome!')
            return
        }*/

        console.log(`Alterei o curral ${curral.id}`)
        api.put(`/corrals/${curral.id}`, { name: newName }, {
            headers: {
                Authorization: route.params.token
            }
        })
            .then((res) => res.data)
            .then((res) => {
                if (res.success) {
                    const currais_ = [...currais]
                    currais_.forEach((curral_) => {
                        if (curral_.id === curral.id) {
                            curral_.name = newName
                        }
                    })
                    setCurrais(currais_)
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    const loadAnimals = (curral) => {
        navigation.navigate("Animais", { token: route.params.token, curral_id: curral.id })
    }

    return <SafeAreaView style={styles.container}>
        <Input
            value={name}
            placeholder="Nome do curral:"
            leftIcon={{ type: 'font-awesome', name: 'list' }}
            onChangeText={value => setName(value)}
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
            onPress={addCurral}
        />
        <FlatList
            data={currais}
            renderItem={({ item }) => <Curral
                curral={item}
                updateCurral={updateCurral}
                removeCurral={removeCurral}
                loadAnimals={loadAnimals}
            />}
            keyExtractor={(item) => item.id}
        />
        <BotaoFlutuante/>
    </SafeAreaView>

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: 'relative'
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