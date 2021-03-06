import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledDiv = styled.div`
height: 40px;
text-align: center;

& span {
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 12px;
letter-spacing: 0.2em;
text-transform: uppercase;
}
`

const Ellipse = styled.span`
display: block;
height: 25px;
width: 25px;
border-radius: 50px;
background-color: var(--color-beige);
margin: 0 auto;
`

function ProgramProperties (props) {    
    return(
<StyledDiv>
<Ellipse />
<span>{props.text}</span>
</StyledDiv>
    )
}


ProgramProperties.propTypes = {
    text: PropTypes.string
  }

export default ProgramProperties;