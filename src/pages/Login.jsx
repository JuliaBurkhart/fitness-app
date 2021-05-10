import React from "react";
import styled from 'styled-components';

import { userIsLoggedInVar } from "../index"; 


import Button from "../elements/Button";
import FlexWrapper from "../elements/FlexWrapper";


const StyledFlexWrapper = styled(FlexWrapper)`
width: 100vw;
height: 100vh;
text-align: center;
`


function Login () {


    function handleSubmit (event) {
        event.preventDefault();
        const userName = event.target[0].value;
        console.log(userName);

        userIsLoggedInVar(true);   
        console.log(userIsLoggedInVar());
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