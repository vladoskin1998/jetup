
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Results } from '../screen/checkWords/results';
import { CheckWords } from '../screen/checkWords/checkWords';

const Stack = createNativeStackNavigator();

export const CheckWordsRouter = () => {
    
    return (
        <Stack.Navigator initialRouteName="CheckWords" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CheckWords" component={CheckWords} />
            <Stack.Screen name="Results" component={Results} />
        </Stack.Navigator>
    );
}

