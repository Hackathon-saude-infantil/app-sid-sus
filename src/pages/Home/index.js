import React from 'react'
import { View, Image, Text, Button, Alert, TouchableHighlight } from 'react-native'
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

      <TouchableHighlight
        onPress={() => navigation.navigate('Camera')}
      >
        <Text style={Styles.button}>
          Tirar Foto
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={Styles.button}>
          Preencher manualmente
        </Text>
      </TouchableHighlight>

    </View>

  )
}
