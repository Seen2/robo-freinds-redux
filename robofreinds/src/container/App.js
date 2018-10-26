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
		super()
		this.state={
			filteredRobots:[],
		}
	}

	onChangeSearch=event=>{
		let {robots}=this.props.response;
		this.props.onChangeSearch(event);
		let filteredRobots=this.state.filteredRobots;

		filteredRobots=robots.filter(robot=>
			robot.name.toLowerCase().includes((this.props.query ||'').toLowerCase())
		);
		this.props.response.robots=filteredRobots;
	}
	componentDidMount(){
        let {isPending,robots}=this.props.response;
        (isPending)?this.props.onRequest():this.setState({filteredRobots:robots});;
	}


	render(){
        let {robots,isPending}=this.props.response;
		return(
			<div >
				<div className="f3 tc" >
					<h1 >RoboFriends</h1>
					<Search value={this.props.query} search={this.onChangeSearch} />
				</div>
				<div>
					<Scroll>
						{(isPending)?<h1>Loading</h1>:<CardList robots={robots} />}
                    </Scroll>
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
