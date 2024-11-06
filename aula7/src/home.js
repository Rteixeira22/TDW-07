import React from 'react';
import { Link } from 'react-router-dom';    
import './styles.css';

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao TodoMatic</h1>
      <p>
        O TodoMatic é uma aplicação de lista de tarefas que permite que você
        gerencie suas tarefas de forma eficiente.
      </p>
      <p>
        Você pode adicionar, editar, marcar como concluída e excluir tarefas.
      </p>
      <p>
        Para começar, clique no menu a cima e escolha uma das opções.
      </p>
    </div>
  );
}

export default Home;