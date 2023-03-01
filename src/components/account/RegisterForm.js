import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Button, Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email('Formaro de emailno valido')
      .required('Email Obligatorio'),
      password:Yup.string()
      .required('Contraseña obligatoria'),
      repeatPassword:Yup.string()
      .required('Contraseña obligatoria')
      .oneOf([Yup.ref('password')], 'Contraseñas no coinciden')
    }),
    validateOnChange:false,
    onSubmit: (formValue) => {
      console.log(formValue);
    },
  })
  return (
    <KeyboardAwareScrollView style={styles.viewForm}>
      <Input placeholder='Correo Electronico' containerStyle={styles.input} rightIcon={<Icon type='material-community' name='at' iconStyle={styles.icon} />} onChangeText={text => formik.setFieldValue('email', text)} errorMessage={formik.errors.email} />
      <Input placeholder='Contraseña' containerStyle={styles.input} rightIcon={<Icon type='material-community' name='eye-outline' iconStyle={styles.icon} />} secureTextEntry={true} onChangeText={text => formik.setFieldValue('password', text)} errorMessage={formik.errors.password} />
      <Input placeholder='Repetir Contraseña' containerStyle={styles.input} rightIcon={<Icon type='material-community' name='eye-outline' iconStyle={styles.icon} />} secureTextEntry={true} onChangeText={text => formik.setFieldValue('repeatPassword', text)} errorMessage={formik.errors.repeatPassword}/>

      <Button title={'Registar'} containerStyle={styles.containerBtn} buttonStyle={styles.btn} onPress={formik.handleSubmit} />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  viewForm: {
    marginTop: 30,

  },
  input: {
    width: '100%',
    marginTop: 10,
  },
  icon: {
    color: '#c1c1c1'
  },
  containerBtn: {
    width: '95%',
    marginTop: 20,

  },
  btn: {
    backgroundColor: '#8C5B3F'
  },
})