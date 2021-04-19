import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const StyledDiv = styled.div`
background: var(--color-beige);
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
    margin-bottom: 1px;
    height: 40px;
}

& p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 10px;
    font-style: normal;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-align: center;
    text-transform: uppercase;
    margin-top: 4px;
}
`

function Navbar () {
    return (
        <StyledDiv>
            <Link to="/">
            <div>
                <img src="images/home.svg" alt=""/>
                <p>Home</p>
            </div>
            </Link>
            
            <Link to="/browse">
            <div>
                <img src="images/browse.svg" alt=""/>
                <p>Browse</p>
            </div>
            </Link>
           
           <Link to="/profil">
           <div>
                <img src="images/profil.svg" alt=""/>
                <p>Profil</p>
            </div>
           </Link>
            
        </StyledDiv>
            )
}

export default Navbar;