import React, { Component } from 'react';
import styled from 'styled-components';


const Register = styled.div`
  display: block;
  margin-top: 9%;
`;

const Salvar = styled.button`
  margin: 2% 45%;
  font-weight: bold;
  color: #212121;
  background-color: #fafafa;

`;

const FieldName = styled.label`
  font-size: 0.9em;
  display:block;
`;

const Field = styled.input`
  color: #fafafa;
`;

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: ' ',
            linguagem: ' ',
            tema: ' ',
        }
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value

        });
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {

        const { nome, linguagem, tema } = this.state;
        return (

            <form >
                <Register className="container">
                    <div>
                        <FieldName  htmlFor="nome"> Seu nome</FieldName>
                        <Field
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div>
                        <FieldName  htmlFor="linguagem">Linguagem</FieldName>
                        <Field
                            className="validate"
                            id="linguagem"
                            type="text"
                            name="linguagem"
                            value={linguagem}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div>
                        <FieldName  htmlFor="tema">Tema</FieldName>
                        <Field
                            className="validate"
                            id="tema"
                            type="text"
                            name="tema"
                            value={tema}
                            onChange={this.escutadorDeInput} />
                    </div>
                </Register>
                <Salvar type="button" onClick={this.submitFormulario}  className= "grey lighten-5 btn">Salvar</Salvar>

            </form>
        

        );
    }
}

export default Formulario;