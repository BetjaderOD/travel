import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import {getAuth, signOut} from  'firebase/auth'
import { useNavigation } from '@react-navigation/native'
 
export default function ProfileScreen() {
    const navigation = useNavigation()
    const cerrarSesion = async () => {
      const auth = getAuth()
      await signOut(auth)
      navigation.navigate('indexs')
    }
    
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button 
      title={'Cerrar Sesión'}
        onPress={cerrarSesion}
        buttonStyle={styles.btn}
        titleStyle={styles.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    btn:{
    backgroundColor:'#8C5B3F',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderBottomColor:'#8C5B3F',
    borderTopColor:'#8C5B3F',
    marginTop:30,
    paddingVertical:10,
    },
    title:{
        color:'white'
    }
})