import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [
            { id: 1, name: ' Eat', completed: true, editState: false },
            { id: 2, name: ' Sleep', completed: false, editState: false },
            { id: 3, name: ' Repeat', completed: false, editState: false },
        ];
    });

    const [newTask, setNewTask] = useState('');
    const [buttonValue, setButtonValue] = useState(0);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TodoContext.Provider value={{ tasks, setTasks, newTask, setNewTask, buttonValue, setButtonValue }}>
            {children}
        </TodoContext.Provider>
    );
};