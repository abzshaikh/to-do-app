import React from "react";
import Todo from "./Todo";

const ToDoList = ( { todos, setTodos, filteredTodos, setToggle, setInputText, seIsEdit } ) => { 

    return(
        <div className="todo-container">
            <ul className="todo-list">
                { filteredTodos.map ( todo => (
                    <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo} setToggle={setToggle} setInputText={setInputText} seIsEdit={seIsEdit} />
                )) }
            </ul>
        </div>
    );
}
 
export default ToDoList;