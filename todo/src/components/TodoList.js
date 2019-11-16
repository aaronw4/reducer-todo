import React from 'react';

const TodoList = (props) => {
    return(
        <div>
            {props.state.map(item => (
                <div>
                {item.item}
                </div>
            ))}
        </div>
    )
}

export default TodoList;