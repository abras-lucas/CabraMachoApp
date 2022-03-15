import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text, buttonStyle } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';

export default function animais({navigation}) {
  return (
    <View>
        <Text h4>
            Animal #1:
            Vaca: Tipo X;
            Idade: 3 anos;
            Ração: Estrela;
        </Text>
        <Text h4>
            Animal #2:
            Vaca: Tipo Y;
            Idade: 7 anos;
            Ração: Varejo;
        </Text>
        <Text h4>
            Animal #3:
            Vaca: Tipo Z;
            Idade: 2 anos;
            Ração: Estrela;
        </Text>
    </View>
  );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff"
    },
    button: {
        width: 300,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
})