import React from 'react';
const Scroll=(props)=>{
    return(
        <div style={{flex:1,height:'500px',overflowY:'scroll',border:'2px solid #123456',marginTop:'3px',}}>
            {props.children}
        </div>
    );
}
export default Scroll;
