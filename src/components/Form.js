import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus, toggleSubmit, isEdit, setToggle }) => {

        const inputextHandler = (e) => {
            setInputText(e.target.value);
        }

        const submitTodoHandler = (e) => {
            e.preventDefault();
            if (!inputText) {
                alert("Please Enter data");
            }
            else if (inputText && !toggleSubmit) {
                setTodos( todos.map( (item) => {
                    if (item.id === isEdit) {
                        return {
                            ...item, text: inputText 
                        }
                    }
                    return item;
                } ) )
                setToggle(true);
                setInputText("");
                // seIsEdit(item.id);
            }
            else {
                setTodos([
                    ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
                ]);
            }

            setInputText("");
        }

        const statushandler = (e) => {
            setStatus(e.target.value);
        }
        return (
            <form>
                <input onChange = { inputextHandler } type="text" className="todo-input" value = { inputText } />
                <button onClick = { submitTodoHandler } className="todo-button" type="submit">
                {
                    toggleSubmit ? <i className="fas fa-plus-square"></i> : <i className="fas fa-edit"></i>
                }
                
                </button>
                <div className="select">
                <select onChange={ statushandler } name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Finished</option>
                    <option value="uncompleted">Unfinished</option>
                </select>
                </div>
            </form>
        );
}
 
export default Form;