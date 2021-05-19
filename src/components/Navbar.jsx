import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import FlexWrapper from "../elements/FlexWrapper";

import SvgHome from "../icons/Home";
import SvgBrowse from "../icons/Browse";
import SvgProfile from "../icons/Profile"

const SectionDiv = styled.div`
background: var(--color-beige);
height: 50px;
width: 100vw;
position: fixed;
bottom: 0;
left: 0;
z-index: 100;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
align-items: center;
justify-content: center;
`


const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: 9px;
    margin-bottom: 1px;
    height: 42px;

& p {
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
const StyledFlexWrapper = styled(FlexWrapper)`
width: 100%;
max-width: 414px;
`

function Navbar () {
    return (
        <SectionDiv>
            <StyledFlexWrapper justify="space-around">
            <Link to="/">
            <Div>
                <SvgHome />
                <p>Home</p>
            </Div>
            </Link>
            
            <Link to="/browse">
            <Div>
                <SvgBrowse/>
                <p>Browse</p>
            </Div>
            </Link>
           
           <Link to="/profil">
           <Div>
                <SvgProfile />
                <p>Profil</p>
            </Div>
           </Link>
           </StyledFlexWrapper> 
        </SectionDiv>
            )
}

export default Navbar;