import React from "react";
import styled from 'styled-components';
import SmallText from "../elements/SmallText";
import FlexWrapper from "../elements/FlexWrapper";

const SectionDiv = styled.div`
background-color: var(--color-white);
padding: 30px 20px 30px 20px;
`
const Bulletpoint = styled.span`
display: inline-block;
width: 14px;
height: 14px;
border-radius: 50px;
background: var(--color-green-mint);
margin-right: 12px;
`

const Li = styled.li`
list-style: none;
padding: 9px 66px 9px 0;
`
const StyledFlexWrapper = styled(FlexWrapper)`
margin-top: 40px;
`


function ProgramPieChart () {

return (
   <SectionDiv>

       <h3>So ist das Programm aufgeteilt:</h3>
       
       <StyledFlexWrapper justify="space-between" align="center" content="center">
    
            <img src="images/piechart-placeholder.png" alt=""/>

            <ul>
                <Li><Bulletpoint /><SmallText>Krafttraining</SmallText></Li>
                <Li><Bulletpoint /><SmallText>Cardio</SmallText></Li>
                <Li><Bulletpoint /><SmallText>Koordinaten</SmallText></Li>
                <Li><Bulletpoint /><SmallText>Beweglichkeit</SmallText></Li>
            </ul>

       </StyledFlexWrapper>
     
   </SectionDiv>
)
}

export default ProgramPieChart;