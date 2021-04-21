import React from "react";
import styled from 'styled-components';
import SmallText from "../../elements/SmallText";

const StyledDiv = styled.div`
background: var(--color-beige);
border-radius: 5px;
width: 375px;
height: 215px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin: 20px 0;

& img {
    position: absolute;
    top: 12.6px;
    left: 16px;
}

& span {
    position: absolute;
    top: 12px;
    right: 18px;
}
`



function BrowserEntry () {
    return (
    <StyledDiv>
        <img src="images/heart.svg" alt=""/>
        <SmallText>Neu</SmallText>
        <h2>Titel des Programms</h2>
    </StyledDiv>
    )
}

export default BrowserEntry;