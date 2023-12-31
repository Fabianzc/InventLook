import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { Screen } from "../utils";

const Stack = createNativeStackNavigator();

export function FavoriteStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name ={"screen.favorites.favorites"} 
                component={FavoritesScreen} 
                options={{title:"Favorites"}}
            />
        </Stack.Navigator>
    )
}