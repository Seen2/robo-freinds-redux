import {SEARCH_FIELD} from './actionTypes';

export const searchChange=text=> {
	console.log("in action creator:",text)
	return {
		type:SEARCH_FIELD,
		payload:text,
	}

}
