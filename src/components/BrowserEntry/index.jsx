import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SmallText from "../../elements/SmallText";
import Heart from "../../icons/Heart";

const StyledDiv = styled.div`
background: var(--color-beige);
border-radius: 5px;
width: 375px;
height: 215px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin: 20px 0;
`
const StyledHeart = styled(Heart)`
position: absolute;
top: 12.6px;
left: 16px;
`
const StyledSmallText = styled(SmallText)`
position: absolute;
top: 12px;
right: 18px;
`

function BrowserEntry (props) {
    return (
    <StyledDiv>
        <StyledHeart />
        <StyledSmallText>Neu</StyledSmallText>
        <h2>{props.title}</h2>
    </StyledDiv>
    )
}


BrowserEntry.propTypes = {
    title: PropTypes.string
  }


export default BrowserEntry;