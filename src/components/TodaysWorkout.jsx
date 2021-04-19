import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
padding: 53px 20px 0 20px;


& span {
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
display: inline-block;
}
`

const StyledFlexWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

& h2 {
display: inline-block;
}
`

const StyledImgBox = styled.div`
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

const StyledDescription = styled.div`
padding-top: 10px;
`

function TodaysWorkout () {
    return (
        <StyledDiv>
            <StyledFlexWrapper>
                <h2>Dein Workout heute</h2>
                <span>Trainingsplan</span>
            </StyledFlexWrapper>
          
           <StyledImgBox>
               <img src="images/titlepic.png" alt=""/>
            </StyledImgBox>
           
           <StyledDescription>
                <p>Titel des Workouts</p>
                <p>Titel des Programms</p>
                <span>XXX kcal · 26 Min. · Beweglichkeit</span>
            </StyledDescription>
        </StyledDiv>
    )
}

export default TodaysWorkout;