import {SEARCH_FIELD} from '../actions/actionTypes';

const initialState={}


export const searchReducer=(state=initialState,action={})=>{
	switch(action.type){
		case SEARCH_FIELD:
			return Object.assign({},state,{text:action.payload});
		default :
			return state;
	}
			
}

