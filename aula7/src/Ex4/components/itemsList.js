import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats, incrementPage, decrementPage } from './catSlice';
import styled from 'styled-components';
import '../../styles.css';

// Estilizar o contêiner dos botões de paginação
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// Estilizar os botões de paginação
const PaginationButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

// Estilizar as imagens dos gatos
const CatImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px;
`;

// Estilizar o contêiner das imagens
const ImageContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

// Estilizar os itens da lista
const ImageItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const ItemList = () => {
  const dispatch = useDispatch();
  const { cats, status, error, page, limit } = useSelector((state) => state.cats);

  useEffect(() => {
    dispatch(fetchCats({ page, limit }));
  }, [dispatch, page, limit]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ImageContainer>
        {cats.map((cat) => (
          <ImageItem key={cat.id}>
            <CatImage src={cat.url} alt="Cat" />
          </ImageItem>
        ))}
      </ImageContainer>
      <PaginationContainer>
        <PaginationButton onClick={() => dispatch(decrementPage())} disabled={page === 1}>
          Página Anterior
        </PaginationButton>
        <PaginationButton onClick={() => dispatch(incrementPage())}>
          Próxima Página
        </PaginationButton>
      </PaginationContainer>
    </div>
  );
};

export default ItemList;