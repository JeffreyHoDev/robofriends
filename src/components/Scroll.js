import React from 'react';


//Every props has children actually
//you can consolelog props.children
//Every single component in React got children even you dont put in property
//in jsx if you do styling, need use double bracket {{}} for object
const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border: '1px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;