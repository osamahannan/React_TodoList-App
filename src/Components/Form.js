import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        console.log("Hello Detective");
        setTodos([
            ...todos,
            {text : inputText, completed : false, id : Math.random() * 1000}
        ]);
        setInputText("");
    };
    
    return (
        <form>
            <input onChange = {inputTextHandler} value={inputText} type="text" className="enter-todo"></input>
            <button onClick = {submitTodoHandler} className="todo-btn" type="submit">
                <i className="fa fa-plus plus-icon"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option vlaue="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </form>
    );
}

export default Form;