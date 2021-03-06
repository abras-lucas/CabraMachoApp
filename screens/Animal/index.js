import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-web';
import { AuthContext } from '../../contexts/auth'
import api from '../../services/api';

function Vaccine({ vaccine }) {
    return <View>
        <Text>{vaccine}</Text>
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
        api.get(`/corrals/${curral_id}/animals/${animal.id}`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            const data = res.data
            const vaccines = data.vaccines
            console.log(data)
            console.log(typeof vaccines, vaccines)
            console.log(Object.keys(vaccines))
            const vaccines_ = new Array()
            console.log(typeof vaccines_, vaccines_)
            Object.keys(vaccines).forEach((key) => vaccines_.push (vaccines[key]))
            console.log(typeof vaccines_, vaccines_)
            setVaccines(vaccines_)
            // console.log(typeof res.data.vaccines)
            // console.log(res.data.vaccines)
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
                <Info title={'C??digo'} value={animal.code} />
                <Info title={'Ra??a'} value={animal.breed} />
                <Info title={'Ra????o'} value={animal.food} />
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