import { StyleSheet, Text, View,  } from 'react-native';
import {  RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export const Results = ({
    route,
}: {
    route: RouteProp<{ params: { countWord: number, countSuccessWord: number } }, 'params'>,
}) => {

    const comment = (num: number): string => {
        if (num >= 4 && num < 7) {
            return 'medium'
        }
        else if (num >= 7) {
            return 'high'
        }
        else {
            return 'low'
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.result}>
                <Text style={styles.text}>
                    {`${route.params?.countSuccessWord * 10}% / ${route.params?.countWord * 10}% `}
                </Text>
                <Text style={styles.text}>
                    {comment(route.params?.countSuccessWord).toUpperCase()}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        flex: 1,
        backgroundColor: "#ffffff",
    },
    result: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 23,
    },
    text: {
        color: 'blue',
        fontSize: 40,
    }
});
