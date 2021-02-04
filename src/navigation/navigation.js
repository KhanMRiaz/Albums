import React from 'react'
import Home from '../screens/Home/Home.screen'
import Albums from '../screens/Albums/Albums.screen'
import Photos from '../screens/Photos/Photos.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Albums" component={Albums} />
        <Stack.Screen name="Photos" component={Photos} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
