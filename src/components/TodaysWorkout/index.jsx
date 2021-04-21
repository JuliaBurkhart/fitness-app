import React from "react";
import styled from 'styled-components';
import titlepic from "./images/titlepic.png";
import SmallText from "../../elements/SmallText";
import FlexWrapper from "../../elements/FlexWrapper";

const SectionDiv = styled.div`
padding: 53px 20px 0 20px;
& h2 {
display: inline-block;
}
`

const ImgBox = styled.div`
margin-top: 10px;
background-color: var(--color-beige);
border-radius: 5px;
width: 375px;
height: 214px;
position: relative;
overflow: hidden;

& img {
position: absolute;
left: 50px;
bottom: 12px;
width: 297px;
}
`

const DescriptionBox = styled.div`
padding-top: 10px;
`

function TodaysWorkout () {
    return (
        <SectionDiv>
            <FlexWrapper justify="space-between" align="center">
                <h2>Dein Workout heute</h2>
                <SmallText>Trainingsplan</SmallText>
            </FlexWrapper>
          
           <ImgBox>
               <img src={titlepic} alt=""/>
            </ImgBox>
           
           <DescriptionBox>
                <p>Titel des Workouts</p>
                <p>Titel des Programms</p>
                <span>XXX kcal · 26 Min. · Beweglichkeit</span>
            </DescriptionBox>
        </SectionDiv>
    )
}

export default TodaysWorkout;