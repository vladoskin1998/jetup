import { DataInterface } from '../types/types'
import { dataDefault } from '../dataDefaultWodrs/dataDefaultWodrs';
import { formDate } from '../actions/formDate';

const initialState: DataInterface = {
    data: dataDefault(),
    historyData: []
}

export const dataReducer = (state = initialState, action: any) => {

    // console.log("action -", action);


    switch (action.type) {
        case 'ADD_DATA': {
            return state = {
                ...state,
                data: [...state.data,
                { wordUA: action.payload.wordUA, wordEN: action.payload.wordEN, wordId: state.data.length + 1 }]
            }
        }
        case 'DELETE_DATA': {
            return state = {
                ...state,
                data: state.data.filter(it => it.wordId !== action.payload)
               
            }
        }
        case 'HISTORY_ADD': {
            return state = {
                ...state,
                historyData: [...state.historyData,
                {
                    historyId: state.historyData.length + 1,
                    date: formDate(new Date()) ,
                    variants: action.payload
                }
                ]
            }
        }
        case 'DELETE_HISTORY_DATA': {
            return state = {
                ...state,
                data: state.data.filter(it => it.wordId !== action.payload)
               
            }
        }
    }

    return state;
}