import React from 'react'
import { useDispatch } from 'react-redux';
import { STRIKE_TODO, DELETE_TODO } from "./actionTypes";

function Todo({ title, id, index, isCompleted }) {
    const deleteTodo = { type: DELETE_TODO, id };
    const strikeTodo = { type: STRIKE_TODO, id };
    const dispatch = useDispatch();

    function handleClickOnButton(e){
        e.stopPropagation();
        dispatch({ ...deleteTodo })
    }

    return <li className = "list-items" onClick = {() => dispatch({ ...strikeTodo })}><span className = {isCompleted ? "strike" : ""}>{`todo ${index+1} : ${title}`}</span> <button onClick = {handleClickOnButton}>X</button></li>
}

export default Todo;