import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-web';

export default function AnimalItem({ animal, editAnimal, removeAnimal, onPress }) {

    return <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <View style={[styles.body, styles.shadow]}>
                {/* <MaterialCommunityIcons name="donkey" style={styles.icon} /> */}
                <View style={styles.itemInfo}>
                    <Text style={styles.name}>{animal.code} - </Text>
                    <Text style={styles.name}>{animal.breed}</Text>
                    {/* <Text style={styles.name}>{animal.food}</Text>
                    <Text style={styles.name}>{animal.birth}</Text> */}
                </View>
                <View style={styles.menuHorizontal}>
                    <Button
                        icon={
                            <Icon
                                name="edit"
                                size={15}
                                color="white"
                            />
                        }
                        onPress={() => editAnimal(animal)}
                    />
                    <View style={{ width: 5 }} />
                    <Button
                        icon={
                            <Icon
                                name="times"
                                size={15}
                                color="white"
                            />
                        }
                        onPress={() => removeAnimal(animal)}
                    />
                </View>
            </View>
        </View>

    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 6,
        paddingBottom: 8
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    item: {
        flex: 1,
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
        flex: 1
    },
    edit: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        padding: 10
    },
    btn: {
        flex: 0.5,
        marginRight: 10
    },
    menu: {
        flexDirection: 'row'
    },
    menuHorizontal: {
        flexDirection: 'row',
    }
})