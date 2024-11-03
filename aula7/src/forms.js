import React, { useState } from 'react';
import './styles.css';

function Forms({onSubmit}) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
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

                <button type='submit' className='btn btn_primary btn_lg'>
                    Add
                </button>
            </form>
        </div>
    );
}

export default Forms;
