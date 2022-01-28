import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StoreInterface } from '../../store/store';
import { Swipeable } from 'react-native-gesture-handler';

export const OnlineNotebook = () => {

    const data = useSelector((state: StoreInterface) => state.dataReducer.data)
    const dispatch = useDispatch()

    const deleteData = (id: number) => {
        dispatch({ type: 'DELETE_DATA', payload: id })
    }

    return <FlatList
        data={data}
        renderItem={({ item }) =>
            <Swipeable renderLeftActions={
                () => <TouchableOpacity style={[styles.listItem, styles.deleteBox]}
                    onPress={() => deleteData(item.wordId)}>
                    <Text style={styles.listText}>
                        Delete
                    </Text>
                </TouchableOpacity>
            }>
                <TouchableOpacity style={styles.listItem}>
                    <Text style={styles.listText}>{`${item.wordEN} - ${item.wordUA}`}</Text>
                </TouchableOpacity>
            </Swipeable>
        }
        keyExtractor={item => item.wordId.toString()}
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
    },
    deleteBox: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
});
