import React, { useState } from "react";
import styled from 'styled-components';



const Div = styled.div`
width: 240px;
height: 240px;
margin-top: 100px;
margin-bottom: 60px;
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: center;
align-items: center;
`

const Count = styled.button`
color: var(--color-blue-dark);
font-weight: 700;
font-style: normal;
font-size: 64px;
`
/* eslint-disable react/prop-types */

function Counter (props) {
const initialReps = props.reps;
    const [count, setCount] = useState(initialReps);

function handleClick() {
    if (count > 0) {
        setCount(count-1);
    }

}

    return (
        <Div>
            <Count onClick={handleClick}>{count} x</Count>
        </Div>
    )
}

export default Counter;