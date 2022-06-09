import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-web';

export default function Curral({ curral, updateCurral, removeCurral, loadAnimals }) {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(curral.name)

    if (edit) {
        return <View style={styles.edit}>
            <Input style={styles.input}
                value={name}
                placeholder="Nome do Curral:"
                onChangeText={value => setName(value)}
            />
            <View style={styles.menu}>
                <Button style={styles.btn}
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

    }

    return <TouchableOpacity onPress = {() => loadAnimals(curral)}>
        <View style={styles.item}>
            <MaterialCommunityIcons name="cow" style={styles.icon} />
            <View style={styles.itemInfo}>
                <Text style={styles.name}>{curral.name}</Text>
                <Text style={styles.name}>{curral.id}</Text>
                <View style={styles.menuHorizontal}>
                    <Button style={{ marginRight: 10 }}
                        icon={
                            <Icon
                                name="edit"
                                size={15}
                                color="white"
                            />
                        }
                        onPress={() => setEdit(true)}
                    />
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
    </TouchableOpacity>
}

const styles = StyleSheet.create({
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
        justifyContent: 'space-between',
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
        flexDirection: 'row'
    }
})