import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const AddWords = () => {

    const [wordUA, setWordUA] = useState("")
    const [wordEN, setWordEN] = useState("")

    const [isWordUaErr, setWordUAErr] = useState(false)
    const [isWordEnErr, setWordENErr] = useState(false)

    const dispatch = useDispatch()

    const addNewWord = () => {
        if (wordUA && wordEN) {
            dispatch({ type: 'ADD_DATA', payload: { wordUA, wordEN } })
            setWordUA("")
            setWordEN("")
            setWordENErr(false)
            setWordUAErr(false)
        }
        else {
            setWordENErr(!wordEN)
            setWordUAErr(!wordUA)
        }
    }

    const addEnglishWord = (str: string) => {
        setWordEN(str)
        setWordENErr(!str)
    }

    const addUkraineWord = (str: string) => {
        setWordUA(str)
        setWordUAErr(!str)
    }


    return (
        <View style={styles.screen}>
            <Text style={styles.text}>English</Text>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={s => addEnglishWord(s)}
                    value={wordEN}
                />
                {
                    isWordEnErr ? <Text style={styles.errorText}>Empty field</Text> : <></>
                }
            </View>
            <Text style={styles.text}>Ukraine</Text>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={s => addUkraineWord(s)}
                    value={wordUA}
                />
                {
                    isWordUaErr ? <Text style={styles.errorText}>Empty field</Text> : <></>
                }
            </View>
            <TouchableOpacity style={styles.button} onPress={addNewWord}>
                <Text style={[styles.text, styles.textButton]}>Додати</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: "#ffffff",
        flex: 1,
    },
    inputView: {
        position: "relative"
    },
    input: {
        backgroundColor: "#ffffff",
        padding: 14,
        marginTop: 8,
        marginBottom: 28,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#C5B3E6"
    },
    text: {
        fontSize: 18,
    },
    textButton: {
        color: "#ffffff",
        textAlign: "center"
    },
    button: {
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#C5B3E6",
    },
    errorText: {
        position: "absolute",
        bottom: 10,
        color: "red",
        fontSize: 12,
    }
});