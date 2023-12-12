import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RankingScreen } from "../screens/RankingScreen";
import { Screen } from "../utils";

const Stack = createNativeStackNavigator();

export function RankingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name ={"screen.ranking.ranking"} 
                component={RankingScreen} 
                options={{title:"Ranking"}}
            />
        </Stack.Navigator>
    )
}