import {
	REQUEST_PENDING,
	REQUEST_FAILED,
	REQUEST_SUCCESS,
} from '../actions/actionTypes';
const initialState={
	robots:[],
	err:'',
	isPending:true,
}
export const requestReducer=(state=initialState,action)=>{
	switch(action.type){
		case REQUEST_PENDING:
			return Object.assign({},state,{isPending:true});
		case REQUEST_SUCCESS:
			return Object.assign({},state,{robots:action.payload,isPending:false});
		case REQUEST_FAILED:
			return {...state,err:action.payload,isPending:false};
		default :
			return state;
	}
}
