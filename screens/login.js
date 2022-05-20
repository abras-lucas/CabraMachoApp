import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text, buttonStyle } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';
import api from '../services/api';



export default function login({ navigation }) {

  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('12345')
  const [errorMsg, setErrorMsg] = useState(null)

  const logar = () => {
    setErrorMsg('')

    if (!username || !password) {
      setErrorMsg('Preencha todos os campos!')
      return
    }

    api.post('/login', {
      username,
      password
    }).then((res) => {
      if (res.data.success) {
        navigation.navigate("Principal", { token: res.data.token })
      } else {
        setErrorMsg('Informações incorretas!')
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.container}>
      <Text h3>CABRA MACHO APP</Text>
      <Text>{errorMsg}</Text>

      <Input
        value={username}
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setUsername(value)}
        keyboardType="email-address"
      />
      <Input
        value={password}
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
        onPress={() => logar()}
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