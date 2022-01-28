import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreInterface } from '../../../store/store';
import { WordInterface, HistoryDataInterfaceVariants } from '../../../types/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

const RANGE_WORDS = 4
const MAX_COUNT_WORD = 10
const INIT_TARGET = { wordUA: "", wordEN: "", wordId: 0 }

export const CheckWords = ({ navigation }: NativeStackScreenProps<ParamListBase, string>) => {

    const dispatch = useDispatch()
    const data = useSelector((state: StoreInterface) => state.dataReducer.data)

    const [countWord, setCountWord] = useState(0)
    const [countSuccessWord, setCountSuccessWord] = useState(0)

    const [randomArray, setRandomArray] = useState<WordInterface[]>([])
    const [targetWord, setTargetWord] = useState<WordInterface>(INIT_TARGET)

    const [history, setHistory] = useState<HistoryDataInterfaceVariants[]>([])




    const getNewCheckWord = () => {
        const tempArr: number[] = []
        setRandomArray([])
        while (tempArr.length < RANGE_WORDS) {
            let randomNumber = Math.floor(Math.random() * data.length);
            if (tempArr.includes(randomNumber) === false) {
                tempArr.push(randomNumber)
                setRandomArray(s => [...s, data[randomNumber]])
            }
        }
        const numberTarget = tempArr[Math.floor(Math.random() * tempArr.length)]
        setTargetWord(data[numberTarget])
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            setCountWord(0)
            setCountSuccessWord(0)
            getNewCheckWord()
        });
        return
    }, [])

    const checkWord = (id: number) => {
        if (countWord >= MAX_COUNT_WORD) {
            dispatch({ type: 'HISTORY_ADD', payload: history })
            navigation.navigate('Results', {
                countWord,
                countSuccessWord,
            })
            return
        }
        if (id === targetWord.wordId) {
            setCountSuccessWord(s => s + 1)
        }
        setCountWord(s => s + 1)
        setHistory(s => [
            ...s,
            {
                variant: randomArray,
                change: randomArray.find((it) => it.wordId === id) || INIT_TARGET,
                right: targetWord,
            }
        ])
        getNewCheckWord()
    }

    return (
        <View style={styles.screen}>
            <Text style={[styles.title, styles.checkWord]}>{targetWord?.wordEN}</Text>
            <View style={styles.list}>
                {
                    randomArray.map((it, index) =>
                        <TouchableOpacity key={index + it.wordEN} style={styles.listItem} onPress={() => checkWord(it?.wordId)}>
                            <Text style={styles.title}>{it?.wordUA}</Text>
                        </TouchableOpacity>
                    )
                }
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
    title: {
        textAlign: 'center',
        color: "white"
    },
    checkWord: {
        fontSize: 18,
        marginBottom: 15,
        color: "black"
    },
    list: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    listItem: {
        width: '47%',
        marginVertical: 8,
        backgroundColor: "#C5B3E6",
        padding: 12,
        borderRadius: 4,
    }

});
