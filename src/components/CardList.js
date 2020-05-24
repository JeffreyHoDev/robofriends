import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    const cardComponents = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name= {robots[i].name} email={robots[i].email} />
        //You will get some error without key props, without it browser wont know what had been done to it
    })
    return (
        <div>
            {cardComponents}
        </div>
    )
}

export default CardList;