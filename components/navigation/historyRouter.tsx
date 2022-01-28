
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { History } from '../screen/history/history';
import { OneTimes } from '../screen/history/oneTimes';

const Stack = createNativeStackNavigator();

export const HistoryRouter = () => {
    
    return (
        <Stack.Navigator initialRouteName="History" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="OneTimes" component={OneTimes} />
        </Stack.Navigator>
    );
}

