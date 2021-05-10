import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
padding: 71px 20px 0 20px;
`

function Greeting (props) {
    console.log(props.name);
    return (
        <StyledDiv>
            <h1>Guten<br />Morgen,<br />{props.name}</h1>
        </StyledDiv>
    )
}

Greeting.propTypes = {
    name: PropTypes.string
  }

export default Greeting;
