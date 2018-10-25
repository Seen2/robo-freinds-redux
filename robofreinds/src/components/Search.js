import React from 'react';

export default class Search extends React.Component{
	render(){
		return(
			<div >
				<input 
					type="text" 
					placeholder="Search" 
					name="query"
					value={this.props.value}
					onChange={this.props.search}
				/>
			</div>
		);
	}

}
