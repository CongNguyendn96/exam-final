import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";
TodoItem.propTypes = {

};

function TodoItem({ item }) {
    return (
        <div className='item'>
            <div className='item__one'>
                <p>Ngày: {item.day}</p>
                <p>X</p>
            </div>
            <p>{item.info}</p>
        </div>
    );
}

export default TodoItem;