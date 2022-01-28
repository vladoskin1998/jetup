import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { StoreInterface } from '../../../store/store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

export const History = ({ navigation }: NativeStackScreenProps<ParamListBase, string>) => {

    const historyData = useSelector((state: StoreInterface) => state.dataReducer.historyData)

    return <FlatList
        data={historyData}
        renderItem={({ item }) =>
            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('OneTimes', {
                historyId: item.historyId
            })}>
                <Text style={styles.listText}>{`History - ${item.date}`}</Text>
            </TouchableOpacity>
        }
        keyExtractor={(item, index) => item.date.toString() + index.toString() }
        style={styles.screen}
    />
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: "#ffffff",
        flex: 1,
    },
    listItem: {
        backgroundColor: "#C5B3E6",
        padding: 18,
        marginVertical: 8,
        borderRadius: 4,
    },
    listText: {
        textAlign: "center",
        fontSize: 18,
        color: "#ffffff",
    }
});
