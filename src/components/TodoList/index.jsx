import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "../TodoItem"
import "./style.scss";
TodoList.propTypes = {

};

function TodoList(props) {
    let items = JSON.parse(localStorage.getItem('data')) || [];
    return (
        <div>
            {items.map((item, index) => (
                <li key={index} >
                    <TodoItem item={item} id={index} />
                </li>
            ))}
        </div>
    );
}

export default TodoList;