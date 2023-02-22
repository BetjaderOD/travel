import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../screens/Index';
import LoginSreen from '../screens/LoginSreen';

const Stack = createNativeStackNavigator();
export default function IndexStack() {
  return (
   <Stack.Navigator>
        <Stack.Screen 
        name='indexs'
        component={Index}
        options={{title:'inicio '}}
        />
         <Stack.Screen 
        name='login'
        component={LoginSreen}
        options={{title:'Inicio Sesión'}}
        />
   </Stack.Navigator>
  )
}