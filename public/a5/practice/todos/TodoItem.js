const TodoItem = (todo) => {
    return (`
        <li>
        <input type="checkbox"
        ${todo.done ? 'checked' : ''}/>
        ${todo.title}
        (${todo.status})
        </li>
    `);
    
    // return (`
    // <li>${todo}</li>
    // `)
}
export default TodoItem;
