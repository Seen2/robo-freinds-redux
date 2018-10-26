import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import rootReducer from './redux/reducers/combineReducers';

const logger=createLogger();
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));
export default class Main extends React.Component{
	render(){
		
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}
