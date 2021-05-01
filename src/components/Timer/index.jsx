import React, { useEffect, useState } from "react";
import FlexWrapper from "../../elements/FlexWrapper";
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import TimerProgressBar from "./TimerProgressBar";

const StyledFlexWrapper = styled(FlexWrapper)`

`

function Timer () {
const initialTime = 30;

const [time, setTime] = useState(initialTime);
const [timerOn, setTimerOn] = useState(false);

// Im Array steht, wann die useEffect function laufen soll, und zwar immer wenn sich
// timerOn State verändert

useEffect(() => {
let interval = null;
console.log("time" + time);

if (time === 0) {
 setTimerOn(false);
 clearInterval(interval);
 } 

// wenn der Timer an ist, soll ein Intervall gesetzt werden in dem jede Sekunde der Wert
// von time verändert wird durch setTime
if (timerOn) {
interval = setInterval(() => {
    setTime(prevTime => prevTime - 1)
}, 1000)

// wenn der Timer aus ist, soll das Intervall gecleart werden, daher wurde das Intervall
// in einer Variable gespeichert
} else {
clearInterval(interval);
}

// dieser Teil ist nicht unbedingt nötig aber soll sicherstellen, dass das Intervall gecleart wird,
// wenn der User die Seite verlässt und der Timer nicht mehr angezeigt wird
return () => clearInterval(interval);

}, [timerOn, time]);

    return (
        <>
    <TimerProgressBar
    hundredPercent={initialTime}
    progress={time}
    unit="sec"
    size={234}
    strokeWidth={15}
    circleOneStroke='rgba(29, 42, 115, 0.3)'
    circleTwoStroke='var(--color-blue-dark)' 
    />

            <StyledFlexWrapper justify="center" align="center" row>
            {!timerOn && time === initialTime && (
            <button onClick={()=> setTimerOn(true)}>Start</button>
            )}

            {timerOn && (
            <button onClick={()=> setTimerOn(false)}>Pause</button>
            )}

            {!timerOn && time !== 0 && time !== initialTime && (
            <button onClick={()=> setTimerOn(true)}>Weiter</button>
            )}

            {!timerOn && time === 0 && (
            <button onClick={()=> setTime(initialTime)}>Nochmal</button>
            )}
            </StyledFlexWrapper>
   
</>
        
      
    )
}

export default Timer;











