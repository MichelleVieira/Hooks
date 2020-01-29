import React, { useContext } from "react";
import imgReact from '../img/react.png';

import styled from 'styled-components';

const themes = {
    light: {
        foreground: "#000000",
        background: "#212121 ",
        color: "#FFFF",
        left: "5%",

    },

};

const Tema = styled.a`
 font-size: 1.1em;
 color: #fafafa;

 &:hover{
    font-weight: bold;
    color: #5f49ab;
 }

  


`;

const ReactImg = styled.img`
  width: 100%;
  display: block;
  
`;

const Bar= styled.nav`
   position: fixed;
   z-index: 2;
  
`;






// Componente em função

const ThemeContext = React.createContext(themes.light);

function Menu() {

    const theme = useContext(ThemeContext);


    return (
        <div>
            <Bar>
                <div className="nav-wrapper" style={{ background: theme.background }}>
                    <a href="#codeLab" className="brand-logo" style={{ left: theme.left }}>Code Lab</a>
                    <ul className="right">
                        <li><Tema href="#temasAbordados" >Temas abordados</Tema></li>
                        <li><Tema href="#temasCadastrar">Cadastrar temas</Tema></li>
                        <li> <Tema href="#sobre">Sobre</Tema></li>
                    </ul>
                </div>
            </Bar>
            <ReactImg src={imgReact} />
        </div>

    );
}



export default Menu;