import React, {useState} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { loveListVar } from "../../index";
import { useQuery } from "@apollo/client";

import { GET_LOVELIST } from "../../graphql/queries";

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
fill: ${props => props.fill};
`
const StyledSmallText = styled(SmallText)`
position: absolute;
top: 12px;
right: 18px;
`

function BrowserEntry (props) {
const [programIsLoved, setProgramLove] = useState(false);
const thisId =props.id;

    // Daten von der Lielingslite abrufen:
    const { data, loading, error } = useQuery(GET_LOVELIST);
    if (loading) return <></>
    if (error) return <p>`Error: ${error.message}`</p>


    // Wenn das Programm auf der Lieblingsliste ist, dann soll das Herz gefärbt werden
    if(data.loveList.includes(thisId) && programIsLoved===false) {
        setProgramLove(true);
    }

     function handleClick (event) {
          event.preventDefault();   
          console.log("click");

            // Wenn das Programm noch nicht auf der Lieblingsliste ist, soll es da rauf:
            if(!data.loveList.includes(thisId)) {
                console.log("id ist nicht auf der Liste aber soll rauf! neue liste:");
                loveListVar([...loveListVar(), thisId]);
                console.log(loveListVar());
            }

            // Wenn das Programm schon drauf ist soll es bei click wieder runter:

             if(data.loveList.includes(thisId)) {
                console.log("id wieder runter von der liste! neue liste:");
                setProgramLove(false);
                loveListVar(loveListVar().filter((id) => id !== thisId));
                console.log(loveListVar());
             }
    }  


    return (
        <Link to={{
            pathname: `/program/${props.id}`,
            key: `${props.id}`
            }}>
    <StyledDiv>
        <StyledHeart 
        onClick={handleClick} 
        fill={programIsLoved ? "red" : "none"} />
        <StyledSmallText>Neu</StyledSmallText>
        <h2>{props.title}</h2>
    </StyledDiv>
    </Link>
    )
}


BrowserEntry.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string
  }


export default BrowserEntry;