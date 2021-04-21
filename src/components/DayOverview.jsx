import React from "react";
import styled from 'styled-components';

import PlayButton from "../elements/PlayButton";
import SmallText from "../elements/SmallText";
import FlexWrapper from "../elements/FlexWrapper";

const StyledFlexWrapper = styled(FlexWrapper)`
background: var(--color-beige);
width: 375px;
height: 100px;
border-radius: 5px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
padding: 7px 0 7px 0;
`
const ButtonBox = styled.div`
background: transparent;
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`
const ContentBox = styled.div`
width: calc(100% - 100px);
background: var(--color-white);
padding: 15px 18px 50px 14px;
border-radius: 0 5px 5px 0;
`
function DayOverview () {
    return (
        <StyledFlexWrapper>
            <ButtonBox>
            <PlayButton />
            </ButtonBox>

            <ContentBox>
                <p>Tag 1</p>
                <SmallText>XXX kcal · 26 Min. · Beweglichkeit</SmallText>


            </ContentBox>
   
        </StyledFlexWrapper>
    )
}

export default DayOverview;