import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils"
import { styles } from "./UserGuestScreen.styles";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login)
  }
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image 
        source={require("../../../../assets/img/guest-icon.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de productos</Text>
      <Text style={styles.description}>Busca y visualiza los mejores produtos de una forma sencialla, vota cuál te gusta más y comenta tu experiansia con él producto</Text>
    
      <Button title="Ver tu perfil" onPress={goToLogin} buttonStyle={styles.btnStyle}/>
    
    </ScrollView>
  );
}