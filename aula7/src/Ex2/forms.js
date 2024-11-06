import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexct'; // Certifique-se de que o caminho está correto
import '../../src/styles.css';
import styled from 'styled-components';

const Button = styled.button`
  color: #00dd88;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #00dd88;
  border-radius: 3px;
`;


function Forms() {
    const [inputValue, setInputValue] = useState('');
    const { tasks, setTasks } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTasks(prevTasks => {
                const updatedTasks = [
                    ...prevTasks,
                    { id: prevTasks.length + 1, name: inputValue, completed: false, editState: false }
                ];
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                return updatedTasks;
            });
            setInputValue('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className='label-wrapper'>
                    <label htmlFor='new-todo-input' className='label__lg'>
                        What needs to be done?
                    </label>
                </h2>

                <input 
                    type="text"
                    id="new-todo-input"
                    className="input input_lg"
                    name="text"
                    autoComplete="off"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <Button type='submit' >
                    Add
                </Button>
            </form>
        </div>
    );
}

export default Forms;