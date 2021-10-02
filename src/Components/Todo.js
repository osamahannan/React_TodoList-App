import React from 'react';

const Todo = ({ text, todos, setTodos, todo }) => {

    const deleteHandle = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandle = () => {
        setTodos(todos.map((item) => {
            if (todo.id === item.id) {
                return {
                    ...item, completed: !item.completed
                };
            }

            return item;
        }));
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed}`}>{text}</li>

            <div className="buttons">
                <button onClick={completeHandle} className="complete-btn">
                    <i className="fas fa-check "></i>
                </button>

                <button onClick={deleteHandle} className="trash-btn">
                    <i className="fas fa-trash "></i>
                </button>
            </div>

        </div>
    );
}

export default Todo;