import React from "react";
import styled from 'styled-components';
// import SmallText from "./SmallText";
import PlayButton from "./PlayButton";
import SmallText from "./SmallText";

const StyledFlexWrapper = styled.div`
background: var(--color-beige);
width: 375px;
height: 100px;
border-radius: 5px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
padding: 7px 0 7px 0;
`
const StyledButtonBox = styled.div`
background: transparent;
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`
const StyledContentBox = styled.div`
width: calc(100% - 100px);
background: var(--color-white);
padding: 15px 18px 50px 14px;
border-radius: 0 5px 5px 0;
`
function DayOverview () {
    return (
        <StyledFlexWrapper>
            <StyledButtonBox>
            <PlayButton />
            </StyledButtonBox>

            <StyledContentBox>
                <p>Tag 1</p>
                <SmallText>XXX kcal · 26 Min. · Beweglichkeit</SmallText>


            </StyledContentBox>
   
        </StyledFlexWrapper>
    )
}

export default DayOverview;