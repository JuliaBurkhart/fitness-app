import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

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

/* eslint-disable react/prop-types */
function DayOverview (props) {
//     console.log("props von dayoverview");
// console.log(props);
    return (
        <StyledFlexWrapper>
            <Link to={{
            pathname: `/workout/${props.programSlug}/${props.workoutId}/${props.day}`,
            key: `${props.workoutId}`,
            }}>
            <ButtonBox>
            <PlayButton />
            </ButtonBox>
            </Link>
           

            <ContentBox>
                <p>Tag {props.day}</p>
                <SmallText>{props.calories} kcal · {props.duration} Min. · {props.categories.map((categorie) => categorie + " ")}</SmallText>
            </ContentBox>
   
        </StyledFlexWrapper>
    )
}

export default DayOverview;