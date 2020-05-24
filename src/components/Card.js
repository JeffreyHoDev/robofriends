import React from 'react'; //This is to let understand JSX
//For React you must return only one element, in this case is a Div only which contains several

const Card = (props) => {
    // const {name, email, id} = props; //Destructuring, optional, you can straight put these without the props on the input parameter above as well
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?100x100`} alt="robots"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;