import React from 'react';



const Card=({robot})=>{
	let {id,name,email}=robot;
	return(
		<div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
			<img height={200} width={200} alt="robot" src={`https://robohash.org/${id}?200x200`}/>
			<div> <h2>{name} </h2> </div>
			<p> {email} </p>
		</div>
	);
	}
export default Card;

