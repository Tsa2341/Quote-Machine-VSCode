import { defaultState } from "./state";


export default function rootReducer ( state = defaultState , action ){
    switch(action){
        default :
            return state;
    }
 };