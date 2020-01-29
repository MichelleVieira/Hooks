import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import styled from 'styled-components';


import Menu from './Components/Menu';
import Tabela from './Components/Tabela';
import Form from './Components/Formulario';
import Sobre from './Components/Sobre';
import Footer from './Components/Footer';




const FormTable = styled.div`

 margin-bottom: 1em;

`;

const Table = styled.div`

  border: 1px solid #212121;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
`;

const Fields = styled.div`
background-color: #212121;


`;

const TitleOne = styled.h1`
text-align: center;
font-size: 2.3em;
font-weight: bold;
color: #5f49ab;
`;

const TitleTwo = styled.h2`
padding-top: 2%;
text-align: center;
font-size: 2.3em;
font-weight: bold;
color: #fafafa;
display:block;
`;





class App extends Component {

  state = {

    autores: [
      {
        nome: "Michelle",
        linguagem: "React",
        tema: "Hook: useState"

      },
      {
        nome: "Michelle",
        linguagem: "React",
        tema: "Hook: useEffect "

      },
      {
        nome: "Michelle",
        linguagem: "React",
        tema: "Hook: useContext"

      },
      {
        nome: "Michelle",
        linguagem: "React",
        tema: "Meu próprio Hook"

      },
      {
        nome: "Michelle",
        linguagem: "React",
        tema: "Styled Components"

      }
    ],


  };

  removeAutor = index => {

    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });

  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] })
  }

  render() {
    return (
      <Fragment id="codeLab" >
        <Menu />
        <FormTable id="temasAbordados">
          <TitleOne >Temas abordados</TitleOne>
          <Table className="container" >
            <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          </Table>
          <Fields id="temasCadastrar" >
            <TitleTwo >Cadastrar Temas</TitleTwo>
            <Form escutadorDeSubmit={this.escutadorDeSubmit} />
          </Fields>
        </FormTable>
        <div  id="sobre">
        <Sobre/>
        </div>
        <Footer/>
      </Fragment>
    );

  }

}

export default App;



