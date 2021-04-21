
import React from "react";
import styled from 'styled-components';

const Circle = styled.span`
position: relative;
height: 30px;
width: 30px;
display: block;
border-radius: 50px;
background-color: var(--color-white);
margin: 0 auto;
`

const Play = styled.span`
position: absolute;
top: 6.75px;
left: 8.75px;
background-color: transparent;
z-index: 10;
width: 0;
height: 0;      
border-top: 8px solid transparent;
border-left: 16px solid var(--color-beige);
border-bottom: 8px solid transparent;    
`

function PlayButton() {
    return (
<Circle>
<Play />
</Circle>
    )
}

export default PlayButton;


