import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
padding: 71px 20px 0 20px;
`

function Greeting (props) {
    console.log(props.name);

    // hours gibt die volle Stunde der aktuellen Uhrzeit an
    var d = new Date();
    var hours = d.getUTCHours();
    console.log(hours);

    // offset gibt die Differenz der Zeitzone des Users zur UTC in Minuten an
    var offset = new Date().getTimezoneOffset();

    // aktuelle Uhrzeit beim User ausrechnen
    let time = hours+((offset/60)*(-1));
    console.log(time)

    if (time>=6 && time<12) {
        return (
            <StyledDiv>
        <h1>Guten<br />Morgen,<br />{props.name}</h1>
        </StyledDiv>)
    } else if (time>=12 && time<18) {
        return (
            <StyledDiv>
                <h1>Guten<br />Tag,<br />{props.name}</h1>
                </StyledDiv>)
    } else if (time>=18 && time<22) {
    
        return (
            <StyledDiv>
                <h1>Guten<br />Abend,<br />{props.name}</h1>
                </StyledDiv>)
    } else {
        return (
            <StyledDiv>
                <h1>Gute<br />Nacht,<br />{props.name}</h1>
                </StyledDiv>)
    }
}

Greeting.propTypes = {
    name: PropTypes.string
  }

export default Greeting;
