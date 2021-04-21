import React from "react";
import styled from 'styled-components';

const Div = styled.div`
width: 15px;
`

const Criss = styled.span`
position: absolute;
right: 21px;
top: 25px;
width: 19px;
border-bottom: 3px solid #1D2A73;
transform: rotate(45deg);
`

const Cross = styled.span`
position: absolute;
right: 21px;
top: 25px;
width: 19px;
border-bottom: 3px solid #1D2A73;
transform: rotate(-45deg);
`

function XClose() {
    return (
        <Div>
        <Criss />
        <Cross />
        </Div>
    )
}

export default XClose;