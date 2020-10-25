import React from 'react'
import { View, Image, TextInput, Text, TouchableHighlight } from 'react-native'

import LogoImg from '../../assets/logo2.png'
import Styles from './styles'
import { useNavigation } from '@react-navigation/native'


export default function Incidents () {
  const navigation = useNavigation()

  return (

    <View style={Styles.container}>

      

      <View style={Styles.header}>
        <Text style={Styles.title}>Confirme os dados do paciente</Text>
      </View>

      <TextInput
        style={Styles.input}
        label='user'
        placeholder='Nome'
        value={'Eduardo Tomacheski'}
      />
      <TextInput
        style={Styles.input}
        label='user'
        placeholder='RG'
        value={'9120108064'}
      />
      <TextInput
        style={Styles.input}
        label='user'
        placeholder='Peso'
        value={'100 kg'}
      />
      <TextInput
        style={Styles.input}
        placeholder='Altura'
        value={'1.92m'}
      />
      <TextInput
        style={Styles.input}
        placeholder='Idade'
        value={'18 anos'}
      />
      <TextInput
        style={Styles.input}
        placeholder='Informações adicionais'
        value={'Alimentação regular'}
      />
      <TouchableHighlight
        onPress={() => navigation.navigate('ListInfo')}
      >
        <Text style={Styles.button}>
        Confirmar
        </Text>
      </TouchableHighlight>

    </View>

  )
}
