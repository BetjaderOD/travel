import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native-elements'
import RegisterForm from '../components/account/RegisterForm'

export default function RegisterScreen() {
  return (
    <View>
         <Image source={require('../../assets/img/lavine.png')} style={styles.logo} />
  
      <View style={styles.viewForm}>
        <RegisterForm/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginTop: 10,
    
      },
      viewForm:{
        
        marginHorizontal: 10 ,
      },
})