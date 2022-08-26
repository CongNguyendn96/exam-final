import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../TodoList';

Box.propTypes = {

};

function Box(props) {
    return (
        <div style={{ border: "1px solid green", width: "450px", minHeight: "600px", borderRadius: "6px", marginLeft: "50px" }}>
            <TodoList />
        </div>
    );
}

export default Box;