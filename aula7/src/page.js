import React, { useState } from 'react';
import './styles.css';
import Forms from './forms';
import Tasks from './tasks';

function Page() {
  const [newValue, setNewValue] = useState('');
  const [buttonValue, setButtonValue] = useState(0);

  const handleFormSubmit = (inputValue) => {
    setNewValue(inputValue);
  };

  const handleClick = (value) => {
    setButtonValue(value);
  };

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <Forms onSubmit={handleFormSubmit} />

      <div>
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={buttonValue === 0}
          onClick={() => handleClick(0)}
        >
          <span className="visually-hidden">Show</span>
          <span>All</span>
          <span className="visually-hidden">tasks</span>
        </button>

        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={buttonValue === 1}
          onClick={() => handleClick(1)}
        >
          <span className="visually-hidden">Show</span>
          <span>Active</span>
          <span className="visually-hidden">tasks</span>
        </button>

        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={buttonValue === 2}
          onClick={() => handleClick(2)}
        >
          <span className="visually-hidden">Show</span>
          <span>Completed</span>
          <span className="visually-hidden">tasks</span>
        </button>
      </div>

      <Tasks newTask={newValue}  buttonValue={buttonValue} />
    </div>
  );
}

export default Page;
