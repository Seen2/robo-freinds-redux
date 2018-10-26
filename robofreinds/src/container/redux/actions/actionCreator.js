import {
	SEARCH_FIELD,
	REQUEST_PENDING,
	REQUEST_FAILED,
	REQUEST_SUCCESS,
} from './actionTypes';

export const searchChange=text=> {
	return {
		type:SEARCH_FIELD,
		payload:text,
	}

}

export const requestRobots=(dispatch)=>()=>{
	dispatch({type:REQUEST_PENDING,isPending:true});
	try{
		fetch('https://jsonplaceholder.typicode.com/users').then(
			res=>res.json()).then(users=>dispatch({type:REQUEST_SUCCESS,payload:users}))
	}catch(err){
		dispatch({type:REQUEST_FAILED,payload:err});
	}
		
}
