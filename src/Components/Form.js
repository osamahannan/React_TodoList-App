import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus, status, filter, setFilter}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text : inputText, completed : false, id : Math.random() * 1000}
        ]);
        setInputText("");
    };

    const statusHandle = (e) => {
        setStatus(e.target.value);
    }
    
    return (
        <form>
            <input onChange = {inputTextHandler} value={inputText} type="text" className="enter-todo"></input>
            <button onClick = {submitTodoHandler} className="todo-btn" type="submit">
                <i className="fa fa-plus plus-icon"></i>
            </button>
            <div className="select">
                <select onChange = {statusHandle} name="todos" className="filter-todo">
                    <option value="all" className= "filter-state">All</option>
                    <option value="completed" className= "filter-state">Completed</option>
                    <option value="pending" className= "filter-state">Pending</option>
                </select>
            </div>
        </form>
    );
}

export default Form;