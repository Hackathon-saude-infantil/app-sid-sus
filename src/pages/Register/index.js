import React from 'react'
import { View, Image, TextInput, Text, TouchableHighlight } from 'react-native'

import LogoImg from '../../assets/logo2.png'
import Styles from './styles'

export default function Incidents () {
  return (

    <View style={Styles.container}>

      

      <View style={Styles.header}>
        <Text style={Styles.title}>Insira os dados do paciente</Text>
      </View>

      <TextInput
        style={Styles.input}
        label='user'
        placeholder='Nome'
      />

      <TextInput
        style={Styles.input}
        label='user'
        placeholder='Peso'
      />
      <TextInput
        style={Styles.input}
        placeholder='Altura'
      />
      <TextInput
        style={Styles.input}
        placeholder='Idade'
      />
      <TextInput
        style={Styles.input}
        placeholder='Informações adicionais'
      />
      <TouchableHighlight>
        <Text style={Styles.button}>
        Confirmar
        </Text>
      </TouchableHighlight>

    </View>

  )
}
