import React from 'react'
import { View, Image, Text, Button, Alert, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import LogoImg from '../../assets/logo2.png'
import Styles from './styles'

export default function Incidents () {
  const navigation = useNavigation()

  return (

    <View style={Styles.container}>

      <View style={Styles.header}>
        <Image source={LogoImg} />

      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Camera')}
      >
        <Text style={Styles.button}>
          Tirar Foto
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={Styles.button}>
          Preencher manualmente
        </Text>
      </TouchableOpacity>

    </View>

  )
}
