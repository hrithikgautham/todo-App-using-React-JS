import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { ADD_TODO } from './actionTypes';

function AddTodo() {
    const [value, setValue] = useState("");
    const [flag, setFlag] = useState(false);
    const [isFirst, setIsFirst] = useState(true);
    const dispatch = useDispatch();
    const addTodo = { type: ADD_TODO, title: value};

    function handleSubmit(e){
        e.preventDefault();
        if(flag || isFirst){
            setFlag(true);
            setIsFirst(false);
            return;
        }
        dispatch(addTodo);
        setValue("");
        setFlag(false);
        setIsFirst(true);
    }

    function handleChange(e){
        setValue(e.currentTarget.value);
        setFlag(e.target.value === "");
        if(isFirst)
            setIsFirst(false);
    }

    return (
        <>
            { flag && !isFirst && <h1 className = "alert">Please enter something!</h1> } 
            <form className = "form-container" onSubmit = {handleSubmit}>
                <label>Enter title: <input onChange = {handleChange} type = "text" value = {value}/></label>
                <p className = "btn-container">
                    <input type = "submit" value = "submit"/>
                </p>
            </form>
        </>
    )
}

export default AddTodo;