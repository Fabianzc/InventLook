import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { ProductsScreen } from "../screens/ProductsScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { screen } from "../utils"

const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator 
            screenOptions={({route}) => ({
                tabBarActiveTintColor: "#00A680",
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({color,size}) => tabScreenOptions(route, color, size),
            })}
        >
            <Tab.Screen name={screen.product.tab} component={ProductsScreen} options={{title: "Products"}}/>
            <Tab.Screen name={screen.favorite.tab} component={FavoritesScreen} options={{title: "Favorites"}}/>
            <Tab.Screen name={screen.ranking.tab} component={RankingScreen} options={{title: "Rankings"}}/>
            <Tab.Screen name={screen.search.tab} component={SearchScreen} options={{title: "Search"}}/>
            <Tab.Screen name={screen.account.tab} component={AccountScreen} options={{title: "Account"}}/>
        </Tab.Navigator>
    );
}

function tabScreenOptions(route, color, size) {
    let iconName;

    if(route.name === screen.product.tab) {
        iconName = "alpha-p-circle-outline";
    }

    if(route.name === screen.favorite.tab) {
        iconName = "heart-outline";
    }

    if(route.name === screen.ranking.tab) {
        iconName = "star-outline";
    }

    if(route.name === screen.search.tab) {
        iconName = "magnify";
    }

    if(route.name === screen.account.tab) {
        iconName = "account-outline";
    }

    return (
        <Icon type="material-community" name={iconName} color={color} size={size}/>
    )
}