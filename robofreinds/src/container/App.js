import React from 'react';
import {connect} from 'react-redux';

import CardList from '../components/CardList';
import Search from '../components/Search';
import '../css/style.css';
import Scroll from "../components/Scroll";
import {searchChange,requestRobots} from "./redux/actions/actionCreator";

const mapStateToProps=state=>({
	query:state.search.text,
	response:state.response,
});

const mapDispatchToProps=(dispatch)=>({
	onChangeSearch:(event)=>dispatch(searchChange(event.target.value)),
	onRequest:requestRobots(dispatch),
});

class App extends React.Component{

	constructor(){
		super();
		this.state={
			filteredRobots:[],
		}
	}

	onChangeSearch=event=>{
		let {robots}=this.props.response;
		this.props.onChangeSearch(event);
		let filteredRobots=robots.filter(robot=>
			robot.name.toLowerCase().includes((this.props.query ||'').toLowerCase())
		);
        this.setState({filteredRobots});
	};
	componentDidMount =async ()=>{
		let {isPending}=this.props.response;
		this.props.onRequest();
	};
	

	render(){
		let {isPending}=this.props.response;

		return(
			<div >
				<div className="f3 tc" >
					<h1 >RoboFriends</h1>
					<Search value={this.props.query} search={this.onChangeSearch} />
				</div>
				<div>
					<Scroll>
						{(isPending)?<h1 className="f1 tc">Loading</h1>:<CardList robots={this.state.filteredRobots} />}
					</Scroll>
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
