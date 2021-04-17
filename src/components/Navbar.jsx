import React from "react";
 import styled from 'styled-components';

const StyledDiv = styled.div`
background: #F5EBDD;
height: 50px;
width: 100vw;
position: fixed;
bottom: 0;
left: 0;
z-index: 100;
display: flex;
flex-direction: row;
justify-content: space-around;

& div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 9px;
}
`

function Navbar () {
    return (
         <StyledDiv>
<div>
    <img src="images/home.svg" alt=""/>
    <p>HOME</p>
</div>
<div>
    <img src="images/browse.svg" alt=""/>
    <p>BROWSE</p>
</div>
<div>
    <img src="images/profil.svg" alt=""/>
    <p>PROFIL</p>
</div>
         </StyledDiv>
         )
}

export default Navbar;