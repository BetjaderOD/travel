import { Button, StyleSheet, Text, View,  } from "react-native";
import React from "react";

export default function Index(props) {
    console.log(props);
    const { navigation } = props;
    return (
    <View> 
        <Button
        title="ir a detalles "
        onPress={() => navigation.navigate("details")}
        />
        <Button
        title="ir a informacion"
        onPress={() => navigation.navigate("information")}
        />
        <Button
        title="ir a login"
        onPress={() => navigation.navigate("details", {screen:'login'})}
        />

    </View>
    );
}
