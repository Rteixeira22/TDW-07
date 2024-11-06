import React from "react";
import '../../src/styles.css';
import { useState, useEffect } from "react";

function Tasks( {newTask, buttonValue} ) {

    const [dadosPesquisaSearchBar, setDadosPesquisaSearchBar] = useState('');


    
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [
            {id:1, name: ' Eat', completed: true, editState: false},
            {id:2, name: ' Sleep', completed: false, editState: false},
            {id:3, name: ' Repeat', completed: false, editState: false},
        ];
    });

    useEffect(() => {
        if (newTask) {
            setTasks(prevTasks => {
                const updatedTasks = [
                    ...prevTasks,
                    { id: prevTasks.length + 1, name: newTask, completed: false, editState: false }
                ];
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                return updatedTasks;
            });
        }
    }, [newTask]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    
    const filteredTasks = tasks.filter(task => {
        if (dadosPesquisaSearchBar !== '') {
            return task.name.toLowerCase().includes(dadosPesquisaSearchBar.toLowerCase());
        } else {
            if (buttonValue === 0) return true; // Show all tasks
            if (buttonValue === 1) return !task.completed; // Show active tasks
            if (buttonValue === 2) return task.completed; // Show completed tasks
            return true;
        }
    });

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const tasksRemaining = filteredTasks.length;

    const updateStateTask = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, editState: !task.editState } : task
            )
        );
    };

    const updateCompletetedStateTask = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    

    const updateTask = (id, newName) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, name: newName, editState: false } : task
            )
        );
    };


    const handleSearch = (e) => {
        e.preventDefault();
        console.log(dadosPesquisaSearchBar);
    };


    

    return (
        <div>

            <div className="text-center">
                <form onSubmit={handleSearch} style={{ alignItems: 'center' }}>
                    <label style={{ position: 'relative', marginRight: '10px' }}>
                        <input
                            type="text"
                            placeholder="Search "
                            value={dadosPesquisaSearchBar}
                            onChange={(e) => setDadosPesquisaSearchBar(e.target.value)}
                            style={{
                                borderRadius: "5rem",
                                padding: "10px",
                                width: "30rem",
                                height: "3rem",
                                border: '1px solid #ccc',
                            }}
                        />
                        
                    </label>
                </form>
            </div>

            <h2 id="list-heading" tabIndex="-1">{tasksRemaining} tasks remaining</h2>
            
            <ul aria-labelledby="list-heading" className="todo-list stack-large stack-exception">
                {filteredTasks.map((task) => (
                    <li className="todo stack-small" key={task.id}>
                        {task.editState ? (

                            <div className="c-cb">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                updateTask(task.id, task.name);
                            }}>
                                <p>New name for {task.name}</p>
                                <input
                                    type="text"
                                    value={task.name}
                                    onChange={(e) => setTasks(prevTasks =>
                                        prevTasks.map(prevTask =>
                                            prevTask.id === task.id ? { ...prevTask, name: e.target.value } : prevTask
                                        )
                                    )}
                                />
                                <div className="btn-group">
                                    <button 
                                        type="button" 
                                        className="btn"
                                        onClick={() => updateStateTask(task.id)}
                                    >
                                        Cancel <span className="visually-hidden">{task.name}</span>
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="btn btn_danger"
                                    >
                                        Save <span className="visually-hidden">{task.name}</span>
                                    </button>
                                </div>
                            </form>
                            </div>
                            
                            
                        ) : (
                            <div className="c-cb">
                                <div className="c-cb">
                                    <input 
                                        id={`todo-${task.id}`} 
                                        type="checkbox" 
                                        defaultChecked={task.completed} 
                                        onClick={() => updateCompletetedStateTask(task.id)}

                                        />
                                    <label className="todo-label" htmlFor={`todo-${task.id}`}>
                                        {task.name}
                                    </label>
                                </div>
                                <div className="btn-group">
                                    <button 
                                        type="button" 
                                        className="btn"
                                        onClick={() => updateStateTask(task.id)}
                                        >
                                        Edit <span className="visually-hidden">{task.name}</span>
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn_danger"
                                        onClick={() => deleteTask(task.id)} 
                                        >
                                        Delete <span className="visually-hidden">{task.name}</span>
                                    </button>
                                </div>
                            </div>
                        )}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;