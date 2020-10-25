import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './pages/Home'
import PageCamera from './pages/Camera'

const AppStack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>

        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Camera' component={PageCamera} />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}
