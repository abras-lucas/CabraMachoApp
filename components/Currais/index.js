import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';

export default function Currais({ navigation, route }) {
    const [currais, setCurrais] = useState([])
    const [name, setName] = useState('')

    useEffect(() => {
        loadCurrais()
    })

    const renderItem = ({ item }) => {
        return <View style={styles.item}>
            <MaterialCommunityIcons name="cow" style={styles.icon} />
            <View style={styles.itemInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.name}>{item.id}</Text>
                <Button
                    icon={
                        <Icon
                            name="times"
                            size={15}
                            color="white"
                        />
                    }
                onPress = {() => removeCurral(item)}
                />
            </View>
        </View>
    }

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
        api.post('/corrals', { name }, {
            headers: {
                Authorization: route.params.token
            }
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const removeCurral = (curral) => {
        console.log('Deletei o item ' + curral.id)
        console.log(`Deletei o item ${curral.id}`)
    }

    return <View>
        <Input
            value={name}
            placeholder="E-mail"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
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
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    </View>

}

const styles = StyleSheet.create({
    item: {
        padding: '1em',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: '1px'
    },
    icon: {
        fontSize: '25px',
        marginEnd: '0.5em'
    },
    name: {
        fontSize: '20px'
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    }
})