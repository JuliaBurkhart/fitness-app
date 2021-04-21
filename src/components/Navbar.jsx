import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

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
flex-direction: row;
justify-content: space-around;


& div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: 9px;
    margin-bottom: 1px;
    height: 42px;
}

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

function Navbar () {
    return (
        <SectionDiv>
            <Link to="/">
            <div>
                <SvgHome />
                <p>Home</p>
            </div>
            </Link>
            
            <Link to="/browse">
            <div>
                <SvgBrowse/>
                <p>Browse</p>
            </div>
            </Link>
           
           <Link to="/profil">
           <div>
                <SvgProfile />
                <p>Profil</p>
            </div>
           </Link>
            
        </SectionDiv>
            )
}

export default Navbar;