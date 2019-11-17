import React from 'react';

const Item = props => {
    let itemClassName = 'item';
    console.log(props.item)
    if (props.item.completed) {
        itemClassName = itemClassName + ' completed';
    }

    const handleClick = e => {
        props.dispatch({type: 'toggleCompleted', payload: props.item.id});
        console.log(props.item.id)
    }
    
    return(
        <div>
            <p className={itemClassName} onClick={handleClick} value={props.item.id}>{props.item.item}</p>
        </div>
    )
}

export default Item;