import React from 'react';
import styled from 'styled-components';

const Teste = styled.div`
 
background-color: #212121;
text-align: center;
color: #fafafa;
padding: 10px 0;
font-size: 0.7em;
`;


function Footer() {

    return (
        <footer>
            <Teste class="container">
             © 2020 Michelle Vieira
            </Teste>
        </footer>
            
       
    );
}



export default Footer;