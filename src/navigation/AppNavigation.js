import { View, Text } from 'react-native'
import React from 'react'
import indexScreen from '../screens/Index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from '../screens/Index';
import Details from '../screens/Details';
import Information from '../screens/Information';


const Tab = createBottomTabNavigator();
export default function AppNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen component={Index} 
            name='index'
            options={{title:"Inicio"}}
            />
            <Tab.Screen component={Details} name='details' options={{
        title:'Detalles'
        }}/>
        <Tab.Screen component={Information} name='information' options={{
        title:'Information'
    }}/>
    </Tab.Navigator>
    
  )
}