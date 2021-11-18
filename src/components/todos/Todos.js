import React, { useState, useReducer } from 'react';
import TodoItem from './TodoItem';

function reducer(todos, action) {
    switch (action.type) {
        case 'add-todo':
            return [...todos, addTodo(action.payload.text)];
        case 'flip':
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo;
            });
        case 'delete':
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

function addTodo(text) {
    return { id: Date.now(), text: text, complete: false };
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({ type: 'add-todo', payload: { text: text } });
        setText('');
    }

    // console.log(todos);

    return (
        <div>
            <h1 className="bg-info text-white py-3 ps-3" >Simple TodoApp</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="mb-2">My To Do List</h3>
                        <form onSubmit={handleSubmit}>
                            <input className="mt-2 form-control" placeholder="Type todo list" type="text" value={text} onChange={(event) => setText(event.target.value)} required />
                            <button className="mt-3 mb-4 btn bg-info text-white form-control table-hover" type="Submit">Add Todo</button>
                        </form>
                        {
                            todos.map((todo) => {
                                return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                            })
                        }
                    </div>
                    <div className="col">
                        <div>
                            <h3>Design by me</h3>
                            <hr />
                            <h5>Simple TodoApp <span className="text-light rounded p-1 bg-success">version 1.0.0</span> <span
                                className="text-light rounded p-1 bg-danger">alpha</span></h5>
                            <p>Simple JSX application to manage my todo list</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="mt-5 pt-5 pb-5 bg-info text-white">
                <div className="py-3">
                    <p className="text-center">copyright &copy; 2021, designed by Rizky Ramadhana </p>
                    <p className="text-center"></p>
                </div>
            </footer>
        </div>
    );
}

export default Todos;