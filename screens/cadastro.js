import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text, buttonStyle, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';

export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected] = useState(false)

  const salvar = () => {
      console.log("Tá salvo")
  }

  return (
    <View style={styles.container}>
      <Text h3>Cadastre-se</Text>
      <Input
        placeholder="E-mail"
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Nome"
        onChangeText={value => setNome(value)}
      />
      <Input
        placeholder="Cpf"
        onChangeText={value => setCpf(value)}
        keyboardType="number-pad"
        returnKeyType="done"
      />
      <Input
        placeholder="Telefone"
        onChangeText={value => setTelefone(value)}
        keyboardType="phone-pad"
        returnKeyType="done"
      />
      <CheckBox 
        title="Eu aceito os termos e condições de uso"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor='green'
        uncheckedColor='red'
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
      />
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title=" Salvar"
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
      />
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