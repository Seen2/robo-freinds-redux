import {combineReducers} from 'redux';
import {searchReducer} from "./searchReducer";
import {requestReducer} from "./requestReducer";

 const rootReducer=combineReducers({
	 search: searchReducer,
	 response:requestReducer,
});
export default  rootReducer;
