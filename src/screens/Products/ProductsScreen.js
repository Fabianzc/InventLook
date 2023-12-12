import React from "react";
import {View, Text} from "react-native";
import { Button } from "react-native-elements";
import { screen } from "../../utils";

export function ProductsScreen(props) {
    const { navigation } = props;

    const goToAddProduct = () => {
        // navigation.navigate(screen.product.addProduct);

        navigation.navigate(screen.account.tab,{screen: screen.account.account});
    };

    return (
        <View>
            <Text>Estamos en la screen Products</Text>

            <Button title="Crear Producto" onPress={goToAddProduct}/>
        </View>
    );
}