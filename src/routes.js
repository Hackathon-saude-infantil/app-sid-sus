import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './pages/Home'
import PageCamera from './pages/Camera'
import Info from './pages/Info'
import Register from './pages/Register'

const AppStack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>

        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Camera' component={PageCamera} />
        <AppStack.Screen name='Info' component={Info} />
        <AppStack.Screen name='Register' component={Register} />



      </AppStack.Navigator>
    </NavigationContainer>
  )
}
