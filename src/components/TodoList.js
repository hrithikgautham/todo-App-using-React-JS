import React from 'react';
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
    const todos = useSelector(state => state);
    return (
        <div>
            <ul className = "li-container">
                {
                    todos.map((todo, index) => <Todo key = {todo.id} title = {todo.title} index = {index} id = {todo.id} isCompleted = {todo.isCompleted}/>)
                }
            </ul>
        </div>
    )
}

export default TodoList;