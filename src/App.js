import React, { useState } from "react";
import styled from "styled-components";

// const Input = styled.input`
//   width: 400px;
//   height: 40px;
//   font-size: 16px;
//   padding: 10px;
//   margin: 0px 10px;
//   border: 1px soid #000;
// `;

// function App() {
//   const [email, setEmail] = useState("");
//   const [isLogged, setIsLogged] = useState(true);

//   return (
//     <>
//       <Input
//         placeholder="Digite um e-mail"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       ></Input>

//       {isLogged ? <button>Sair</button> : <button>Fazer Loggin</button>}

//       {email.length > 0 && (
//         <p>
//           {email.length} caractere{email.length !== 1 ? "s" : ""}
//         </p>
//       )}
//     </>
//   );
// }

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
`;

const TitleSecond = styled.h3`
  color: #002000;
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
            <p>Sub-total : R$ {parseFloat(valorConta)}</p>
            <p>
              Gorjeta ({gorjeta}%) : R${parseFloat(calcular().toFixed(2))}
            </p>
            <p>Total : R${parseFloat(calcular() + valorConta).toFixed(2)}</p>
          </TableSecond>
        )}
      </Table>
    </Container>
  );
}

//USE STATES COM SENHAS
// const Input = styled.input`
//   width: 400px;
//   height: 40px;
//   font-size: 16px;
//   padding: 10px;
//   margin: 0px 10px;
//   border: 1px soid #000;
// `;

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleButton = () => {
//     alert(email + " - " + password);
//   };

//   return (
//     <>
//       <Input
//         placeholder="Digite um e-mail"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       ></Input>
//       <Input
//         placeholder="Digite uma senha"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       ></Input>
//       <button onClick={handleButton}>Dizer</button>
//     </>
//   );
// }

// const Site = styled.div`
//   width: 400px;
//   height: 400px;
//   background-color: #00ff00;
// `;

// const Botao = styled.button`
//   font-size: 19px;
//   padding: 10px 15px;
//   background-color: ${(props) =>
//     props.ativo === true ? "#f0f898" : "#f6f6f6"};
//   color: ${(props) => (props.ativo === true ? "#f6f6" : "#000")};
// `;

// function App() {
//   return (
//     <Site>
//       <Botao ativo={true}>Clique aqui</Botao>
//       <Botao ativo={false}>Comprar</Botao>
//     </Site>
//   );
// }

//

//USE STATE

// function App() {
//   const [contagem, setContagem] = useState(0);

//   const botaoAction = () => {
//     setContagem(contagem + 1);
//   };

//   return (
//     <>
//       <div>{contagem} Vezes</div>
//       <button onClick={botaoAction}>Clique aqui para aumentar.</button>
//     </>
//   );
// }

export default App;
