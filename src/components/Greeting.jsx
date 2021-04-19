import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
padding: 71px 20px 0 20px;
`

function Greeting () {
    return (
        <StyledDiv>
            <h1>Guten<br />Morgen,<br />Julia</h1>
        </StyledDiv>
    )
}

export default Greeting;
