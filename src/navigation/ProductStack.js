import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsScreen } from "../screens/Products/ProductsScreen";
import { AddProductScreen } from "../screens/Products/AddProductScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function ProductStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.product.products} 
                component={ProductsScreen} 
                options={{title:"Products"}}
            />

            <Stack.Screen 
                name={screen.product.addProduct} 
                component={AddProductScreen} 
                options={{title:"Nuevo Producto"}}
            />
        </Stack.Navigator>
    )
}