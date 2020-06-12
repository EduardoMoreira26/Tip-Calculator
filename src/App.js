import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table = styled.div`
  border: 1px solid #000;
  text-align: center;
  width: 700px;
  height: 310 px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0px 2px 5px #000;
`;

const TableSecond = styled(Table)``;

const Title = styled.h1`
  color: #000;
  font-family: "IBM plex mono", monospace;
`;

const TitleSecond = styled.h3`
  color: #002000;
  font-family: "IBM plex mono", monospace;
`;

const Input = styled.input`
  width: 400px;
  height: 15px;
  padding: 15px;
  margin-bottom: 15px;
`;

function App() {
  const [valorConta, setValorConta] = useState("");
  const [gorjeta, setGorjeta] = useState("");

  function calcular() {
    let valorTotal = (valorConta * gorjeta) / 100;

    return valorTotal;
  }

  return (
    <Container>
      <Table tituloFonte>
        <Title>CALCULADORA DE GORJETA</Title>

        <TitleSecond>Quanto deu a conta?</TitleSecond>
        <Input
          type="number"
          value={valorConta}
          onChange={(e) => setValorConta(parseFloat(e.target.value))}
        ></Input>

        <TitleSecond>Qual a porcentagem da gorjeta?</TitleSecond>
        <Input
          type="number"
          value={gorjeta}
          onChange={(e) => setGorjeta(parseFloat(e.target.value))}
        ></Input>
        {valorConta > 0 && (
          <TableSecond>
            <p>Sub-total : € {parseFloat(valorConta)}</p>
            <p>
              Gorjeta ({gorjeta}%) : € {parseFloat(calcular().toFixed(2))}
            </p>
            <p>Total : € {parseFloat(calcular() + valorConta).toFixed(2)}</p>
          </TableSecond>
        )}
      </Table>
    </Container>
  );
}

export default App;
