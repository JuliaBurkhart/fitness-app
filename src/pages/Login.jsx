import React from "react";
import styled from 'styled-components';

import { userIsLoggedInVar, userVar } from "../index"; 


import Button from "../elements/Button";
import FlexWrapper from "../elements/FlexWrapper";


const StyledFlexWrapper = styled(FlexWrapper)`
width: 100vw;
height: 100vh;
text-align: center;
`


function Login () {
    console.log(userIsLoggedInVar());

    function handleSubmit (event) {
        event.preventDefault();
        const userName = event.target[0].value;
        console.log(userName);
        userIsLoggedInVar(true); 
        userVar({name: userName});  
    }

    return (
        <StyledFlexWrapper justify="center" align="center" column>
                   
            <p>Schön dass du dabei bist!
                <br/>Wie heißt du?</p>
    <form onSubmit={handleSubmit}>
    <input type="text" />
   
    <Button type="submit">Login</Button>


    </form>
       
   
    </StyledFlexWrapper>
    
    
    )
}

export default Login;