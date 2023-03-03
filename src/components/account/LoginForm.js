import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Button, Icon } from 'react-native-elements'
import { useFormik } from "formik";
import * as Yup from "yup";



export default function LoginForm() {
    const [password, setPassword] = useState(false)
    const showPass = () =>{
        setPassword(!password)
    }
  return (
    <View>
      <Text>Formulario login xd</Text>
      <Input
       placeholder="Correo Electronico"
       containerStyle={styles.input}
       rightIcon={
         <Icon type="material-community" name="at" iconStyle={styles.icon} />
       }
      />
      <Input
       placeholder="Contraseña"
       containerStyle={styles.input}
       rightIcon={
         <Icon
           type="material-community"
           name={password ? "eye-off-outline" : "eye-outline"}
           iconStyle={styles.icon}
           onPress={showPass}
         />
       }
      />
     <Button
      title={"Registar"}
      containerStyle={styles.containerBtn}
      buttonStyle={styles.btn}
     />
    </View>
  )
}

const styles = StyleSheet.create({

})