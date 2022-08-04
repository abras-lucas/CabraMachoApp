import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-web';
import { AuthContext } from '../../contexts/auth'
import api from '../../services/api';

function Vaccine({ vaccine }) {
    return <View style={[styles.body, styles.shadow, styles.infoValue]}>
        <Text style={styles.infoValue}>{vaccine.name}</Text>
    </View>
}

export default function Animal({ navigation, route }) {

    const [vaccines, setVaccines] = useState([])
    const [name, setName] = useState('')
    const { animal, curral_id } = route.params
    const { token } = useContext(AuthContext)


    useEffect(() => {
        loadVaccines()
    }, [])

    const loadVaccines = () => {
        console.log(`/animals/${animal.id}/vaccines/`)
        api.get(`/animals/${animal.id}/vaccines/`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            console.log(res.data)
            console.log(typeof res.data)
            setVaccines(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    const addVaccine = () => {
        api.post(`/animals/${animal.id}/vaccines`, {name}, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return <View style={{ padding: 10 }}>
        <View style={[styles.body, styles.shadow]}>
            <View>
                <Info title={'Código'} value={animal.code} />
                <Info title={'Raça'} value={animal.breed} />
                <Info title={'Ração'} value={animal.food} />
                <Info title={'Nascimento'} value={animal.birth} />
            </View>
            <View style={styles.separator} />
            <View>
                <View>
                    <Input
                        value={name}
                        placeholder="Vacina"
                        leftIcon={{ type: 'font-awesome', name: 'heartbeat' }}
                        onChangeText={value => setName(value)}
                    />
                    <Button
                        icon={
                            <Icon
                                name="plus"
                                size={15}
                                color="white"
                            />
                        }
                        title=" Adicionar vacina"
                        onPress={addVaccine}
                    />
                </View>
            </View>
            <FlatList
                data={vaccines}
                renderItem={({ item }) => <Vaccine
                    vaccine={item}
                />}
                keyExtractor={(item) => item.id}
            />
        </View>
    </View>
}

function Info({ title, value }) {
    return <View>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoValue}>{value}</Text>
    </View>
}

const styles = StyleSheet.create({
    infoTitle: {
        color: '#cac3c0',
        fontSize: 10,
        fontWeight: '600'
    },
    infoValue: {
        fontSize: 20,
        marginBottom: 5
    },
    body: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})