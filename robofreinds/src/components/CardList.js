import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

import Card from './Card';

const CardList=({robots})=>{

	return( 
		<div className='tc br3 pa3 ma2 dib bw2 '>

			{robots.map((robot)=><Card key={robot.id} robot={robot}/>)}
		</div>
	);
}
export default CardList
