import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Button, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Toast  from 'react-native-toast-message';
import { useNavigation } from "@react-navigation/native";

export default function RegisterForm() {
  const [password, setPassword] = useState(false);
  const [passwordR, setPasswordR] = useState(false);
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Formaro de emailno valido")
        .required("Email Obligatorio"),
      password: Yup.string().required("Contraseña obligatoria"),
      repeatPassword: Yup.string()
        .required("Contraseña obligatoria")
        .oneOf([Yup.ref("password")], "Contraseñas no coinciden"),
    }),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate("indexs");
      } catch (error) {
       Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error al registrar la cuenta',
          text2: 'El email ya esta en uso',
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      }
    },
  });
  const showPass = () => {
    setPassword(!password);
    console.log("Al chile jon ya me harto");
  };
  const showRPass = () => {
    setPasswordR(!passwordR);
  };
  return (
    <KeyboardAwareScrollView style={styles.viewForm}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
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
        secureTextEntry={password ? false : true}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={passwordR ? "eye-off-outline" : "eye-outline"}
            onPress={showRPass}
            iconStyle={styles.icon}
          />
        }
        secureTextEntry={passwordR ? false : true}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />

      <Button
        title={"Registar"}
        containerStyle={styles.containerBtn}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    marginTop: 30,
  },
  input: {
    width: "100%",
    marginTop: 10,
  },
  icon: {
    color: "#c1c1c1",
  },
  containerBtn: {
    width: "95%",
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#8C5B3F",
  },
});
