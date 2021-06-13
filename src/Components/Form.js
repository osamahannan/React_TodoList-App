const Form = () => {
    return (
        <form>
            <input type="text" className="enter-todo"></input>
            <button className="todo-btn" type="submit">
                <i className="fa fa-plus plus-icon"></i>
            </button>
        </form>
    );
}

export default Form;