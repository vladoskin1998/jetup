import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { dataReducer } from '../reducers/dataReducer';
import { DataInterface } from '../types/types';

const store = createStore(
    combineReducers({
        dataReducer
    }),
    composeWithDevTools()
);

export default store;


export interface StoreInterface{
    dataReducer: DataInterface
}