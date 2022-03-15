import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text, buttonStyle } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';

export default function login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.navigate("Principal")
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.container}>
      <Text h3>CABRA MACHO APP</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title=" Log In"
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
      />
      <Button
        icon={
          <Icon
            name="user"
            size={15}
            color="white"
          />
        }
        title=" Cadastrar"
        buttonStyle={specificStyle.button}
        onPress={() => cadastrar()}
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