import React from 'react';
import { Provider } from 'react-redux';
import store from "./store";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
    return (
        <Provider store = {store}>
            <div className = "main-container">
                <h1>TodoList</h1>
                <AddTodo/>
                <TodoList/>
            </div>
        </Provider>
    )
}

export default TodoApp;
