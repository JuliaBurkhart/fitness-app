import React from "react";
import styled from 'styled-components';
import SmallText from "../elements/SmallText";

const StyledDiv = styled.div`
background-color: var(--color-white);
padding: 30px 20px 30px 20px;
`
const StyledBulletpoint = styled.span`
display: inline-block;
width: 14px;
height: 14px;
border-radius: 50px;
background: var(--color-green-mint);
margin-right: 12px;
`

const StyledLi = styled.li`
list-style: none;
padding: 9px 66px 9px 0;
`
const StyledFlexWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
align-content: center;
margin-top: 40px;
`


function ProgramPieChart () {

return (
   <StyledDiv>

       <h3>So ist das Programm aufgeteilt:</h3>
       
       <StyledFlexWrapper>
    
            <img src="images/piechart-placeholder.png" alt=""/>

            <ul>
                <StyledLi><StyledBulletpoint /><SmallText>Krafttraining</SmallText></StyledLi>
                <StyledLi><StyledBulletpoint /><SmallText>Cardio</SmallText></StyledLi>
                <StyledLi><StyledBulletpoint /><SmallText>Koordinaten</SmallText></StyledLi>
                <StyledLi><StyledBulletpoint /><SmallText>Beweglichkeit</SmallText></StyledLi>
            </ul>

       </StyledFlexWrapper>
     
   </StyledDiv>
)
}

export default ProgramPieChart;