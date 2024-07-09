import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from './Homescreen'
const Drawer = createDrawerNavigator() ;
const Main = () => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen  name='Homescreen' component={Homescreen} options={{headerShown:false}}/>

    
   </Drawer.Navigator>
  )
}


export default Main