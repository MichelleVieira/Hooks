import React from 'react';
import useContextOnAbout from '../Hooks/useContextOnAbout';
import styled from 'styled-components';

const Title = styled.h1`
text-align: center;
font-size: 2.3em;
font-weight: bold;
color: #5f49ab;
`;

const Continue = styled.p`
text-align: center;
font-size: 2.3em;
font-weight: bold;
color: #212121;
cursor: pointer;
`;

const Sobre = () => {

    const isContextOnAboutOpen = useContextOnAbout(true);

    return(
        <div>
            <Title>E sobre a aprendizagem ?</Title>
            <Continue>{isContextOnAboutOpen ? "..." : "Continua..."}</Continue>
        </div>
    );
};

export default Sobre;