import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deposito, levantamento } from "./slice";
import styled from 'styled-components';



const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const ButtonLev = styled(Button)`
  color: #191970;
  border-color: #191970;
`;



function BalanceManager() {
    const [valor, setValor] = useState("");
    const dispatch = useDispatch();
    const saldo = useSelector((state) => state.balance.saldo);

  

    const depositar = () => {
        if(valor) {
            dispatch(deposito(Number(valor)));
            setValor("");
        }
    };
    
    const levantar = () => {
        if(valor) {
            dispatch(levantamento(Number(valor)));
            setValor("");
        }
    };

    return (
        <div>

            <input 
                type="number" 
                value={valor} 
                onChange={ (e) => setValor(e.target.value)} 
                placeholder='valor'/>        

            <br />

            <Button onClick={depositar}>Depositar</Button>
            <ButtonLev onClick={levantar}>Levantar</ButtonLev>
        </div>
    );
}
export default BalanceManager;