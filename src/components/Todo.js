import React from "react";

const Todo = ( {text, todo, todos, setTodos, setToggle, setInputText, seIsEdit} ) => {
    const deleteHandler = () => {
        setTodos( todos.filter( (el) => el.id !== todo.id ));
    }

    const completeHandler = () => {
        setTodos( todos.map( (item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }

            return item;
        } ) )
    }

    const editHandler = () => {
        todos.map( (item) => {
            if (item.id === todo.id) {
                setToggle(false);
                setInputText(item.text);
                seIsEdit(item.id);
            }
        })
    }
    return (  
        <div className={`todo ${todo.completed ? "completed" : ""}`}>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text} </li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            <button onClick={editHandler} className="edit-btn"><i className="fas fa-edit"></i></button>
        </div>
    );
}

export default Todo;