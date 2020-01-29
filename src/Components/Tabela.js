import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';

const Aviso = styled.p`
  font-size: 0.8em;
  text-align: center;
  color: #dd2c00;
  
`;

  


const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Participantes</th>
                <th>Linguagens</th>
                <th>Temas</th>
                <th> - </th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count >= 1){
         setTimeout(() => {
            
           alert(` Atualizado !` );
        }, 1000);
    }
      });

    const linhas = props.autores.map((linha, index) => {
        
        return (
            
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.linguagem}</td>
                <td>{linha.tema}</td>
                <td><button onClick={() =>  { setCount(count + 1) || props.removeAutor(index) } }
                 className="waves-effect waves-light grey darken-4 btn">Excluir</button></td>
            </tr> 
         

           

        );

    });

    return (
        <tbody>
             {linhas}
         <Aviso> {count} itens foram excluidos </Aviso>
        </tbody> 
  
    );

}

class Tabela extends Component {

    render() {

        const { autores, removeAutor } = this.props;

        return (
            <table className="centered highlight" >
                <TableHead />
                <TableBody autores={autores} removeAutor={removeAutor} />

            </table>
        )
    }

}


export default Tabela;




