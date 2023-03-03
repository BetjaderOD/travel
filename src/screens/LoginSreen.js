import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../components/account/LoginForm";
import { color } from "react-native-reanimated";

export default function LoginSreen() {
  const navigation = useNavigation();
  console.log(navigation);
  const irAResgistro = () => {
    navigation.navigate("registerS");
  };
  return (
    <View>
      <Image
        source={require("../../assets/img/lavine.png")}
        style={styles.logo}
      />
      <View style={styles.contentForm}>
        <LoginForm />
        <Text style={styles.text}>
          Aun no tienes cuneta?
          <Text style={styles.textBtn} onPress={irAResgistro}>
            registrate aqui!!
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginTop: 10,
  },
  contentForm: {
    marginHorizontal: 30,
  },
  text: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  textBtn: {
    fontWeight: "bold",
  },
});
