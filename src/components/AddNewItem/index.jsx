import React from 'react';
import "./style.scss";
import PropTypes from 'prop-types';
import { useState } from "react";
AddNewItem.propTypes = {

};

function AddNewItem(props) {
    const [formValue, setFormValue] = useState({
        info: "",
        day: ""
    })
    const handleChangeInput = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }
    const handleCreateItem = () => {
        let data2 = JSON.parse(localStorage.getItem("data")) || [];
        data2.push(formValue);
        localStorage.setItem("data", JSON.stringify(data2));
    }
    return (
        <form action="" onSubmit={handleCreateItem}>
            <div className='create'>
                <div className='create__content'>
                    <label htmlFor="">Nội dung</label>
                    <input
                        type="text"
                        placeholder='Mời nhập nội dung của ngày'
                        name="info"
                        value={formValue.info}
                        onChange={handleChangeInput}
                        required
                    ></input>
                </div>
                <div className='create__date'>
                    <label htmlFor="">Ngày nhắc</label>
                    <input
                        type="date"
                        name="day"
                        value={formValue.day}
                        onChange={handleChangeInput}
                        required
                    ></input>
                    <button type='submit'>Lưu ngày</button>
                </div>
            </div>
        </form>
    );
}

export default AddNewItem;