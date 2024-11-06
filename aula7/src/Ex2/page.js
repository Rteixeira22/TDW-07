import React, { useState } from 'react';
import '../../src/styles.css';
import Forms from './forms';
import Tasks from './tasks';
import { TodoContext } from '../contexct'; // Certifique-se de que o caminho está correto
import { useContext } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #0088dd;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0088dd;
  border-radius: 3px;
`;

function Page() {
  const [newValue, setNewValue] = useState('');
  const { buttonValue, setButtonValue } = useContext(TodoContext);

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
      <Button onClick={() => setButtonValue(0)}>
          <span className="visually-hidden">Show</span>
          <span>All</span>
          <span className="visually-hidden">tasks</span>
        </Button>

        <Button onClick={() => setButtonValue(1)}>
          <span className="visually-hidden">Show</span>
          <span>Active</span>
          <span className="visually-hidden">tasks</span>
        </Button>

        <Button onClick={() => setButtonValue(2)}>
          <span className="visually-hidden">Show</span>
          <span>Completed</span>
          <span className="visually-hidden">tasks</span>
        </Button>
      </div>

      <Tasks newTask={newValue}  buttonValue={buttonValue} />
    </div>
  );
}

export default Page;
