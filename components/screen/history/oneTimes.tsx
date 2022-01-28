import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { StoreInterface } from '../../../store/store';
import { RouteProp } from '@react-navigation/native';

export const OneTimes = ({ route }: { route: RouteProp<{ params: { historyId: number } }, 'params'> }) => {

    const historyData = useSelector((state: StoreInterface) => state.dataReducer.historyData)
    const data = historyData.find((it) => it.historyId === route.params.historyId)?.variants

    return <FlatList
        data={data}
        renderItem={({ item }) =>
            <TouchableOpacity style={styles.listItem}>
                <Text style={styles.text}>{`Вибрано - ${item.change.wordEN}`}</Text>
                <Text style={styles.text}>{`Правильно - ${item.right.wordEN}`}</Text>
                <View style={styles.itemList}>
                    {
                        item.variant.map((it, index) =>
                            <Text key={index + it.wordId + it.wordEN} style={styles.itemText}>{it.wordEN}</Text>
                        )
                    }
                </View>
            </TouchableOpacity>
        }
        keyExtractor={(item, index) => item.change.wordId.toString() + index.toString() + item.change.wordEN}
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
    text: {
        textAlign: "center",
        fontSize: 18,
        color: "#ffffff",
        marginBottom: 6,
    },
    itemList: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    itemText: {
        fontSize: 13,
        color: "#ffffff",
    }
});



