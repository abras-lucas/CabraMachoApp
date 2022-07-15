import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Curral({ curral, updateCurral, removeCurral, loadAnimals }) {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(curral.name)

    // Modo de edição
    if (edit) {
        return <View style={styles.container}>
            <View style={[styles.body, styles.shadow, styles.edit]}>
                <TextInput style={styles.input}
                    value={name}
                    placeholder="Nome do Curral:"
                    onChangeText={value => setName(value)}
                />
                <View style={styles.menu}>
                    <Button style={[styles.btn, {marginRight: 10}]}
                        icon={
                            <Icon
                                name="save"
                                size={15}
                                color="white"
                            />
                        }
                        onPress={
                            () => {
                                updateCurral(curral, name)
                                setEdit(false)
                            }
                        }
                    />
                    <View style={{width: 5}}/>
                    <Button style={styles.btn}
                        icon={
                            <Icon
                                name="times"
                                size={15}
                                color="white"
                            />
                        }
                        onPress={() => setEdit(false)}
                    />
                </View>
            </View>
        </View>

    }

    return <TouchableOpacity onPress={() => loadAnimals(curral)}>
        <View style={styles.container}>
            <View style={[styles.body, styles.shadow]}>
                {/* <MaterialCommunityIcons name="barn" style={styles.icon} /> */}
                <View style={styles.itemInfo}>
                    <Text style={styles.name}>{curral.name}</Text>
                    {/* <Text style={styles.name}>{curral.id}</Text> */}
                    <View style={styles.menuHorizontal}>
                        <Button
                            icon={
                                <Icon
                                    name="edit"
                                    size={15}
                                    color="white"
                                />
                            }
                            onPress={() => setEdit(true)}
                        />
                        <View style={{width: 5}}/>
                        <Button
                            icon={
                                <Icon
                                    name="times"
                                    size={15}
                                    color="white"
                                />
                            }
                            onPress={() => removeCurral(curral)}
                        />
                    </View>
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
    },
    edit: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        flex: 0.5,
    },
    menu: {
        flexDirection: 'row',
    },
    menuHorizontal: {
        flexDirection: 'row',
    },
    input: {
        fontSize: 20
    }
})