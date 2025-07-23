import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoList: React.FC = () => {
    const [input, setInput] = useState('');
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const removeTodo = useTodoStore((state) => state.removeTodo);
    const clearTodo = useTodoStore((state) => state.clearTodos);

    const handleAdd = () => {
        if (input.trim() !== '') {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="할 일을 입력하세요" />
                <button className="ml-4" onClick={handleAdd}> [추가] </button>
                <button className="ml-4" onClick={clearTodo}> [전체 삭제] </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.done ? 'line-through': 'none' }}>
                        <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }} >
                            {todo.text}
                        </span>
                        <button onClick={() => removeTodo(todo.id)}> 삭제 </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default TodoList;