import React from "react";
import styled from 'styled-components';


import SmallText from "../elements/SmallText";
import FlexWrapper from "../elements/FlexWrapper";
import Chain from "../icons/Chain";
import Timer from "../components/Timer";


const StyledDiv = styled.div`
position: relative;
background: var(--color-green-mint);
width: 100vw;
height: 100vh;
padding: 25px 17px 0 17px; 

`
const StyledChain = styled(Chain)`
margin-top: 35px;
`


function Exercise () {
    return (
        <StyledDiv>
            <FlexWrapper justify="center">
                <SmallText>beenden</SmallText>
            </FlexWrapper>

          
            <StyledChain />

            <Timer />
            
            <FlexWrapper justify="center" align="center">
                <h1>Plank</h1>
            </FlexWrapper>
                
        </StyledDiv>
    )
}

export default Exercise;