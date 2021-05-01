import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
display: block;
    margin: 20px auto;
    max-width: 100%;
`

const InnerCircle = styled.circle`
    fill: none;
`

const ProgressCircle = styled.circle`
    fill: none;
`
const SvgCircleText = styled.text`
    text-anchor: middle;
    fill: var(--color-blue-dark);
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
`

function TimerProgressBar (props) {
    
    // Das sind die props die mitgegeben werden sollen,
    // destruktured:
    /* eslint-disable react/prop-types */
    const { 
        size, 
        hundredPercent,
        progress, 
        unit,
        strokeWidth, 
        circleOneStroke, 
        circleTwoStroke,
    } = props;

    // Der Mittelpunkt errechnet sich aus der Grafikgröße durch 2
    const center = size / 2;

    // Der Kreisradius ist die Hälfte des Durchmessers minus den Rand (strokeWidth) auf einer Seite
    const radius = size / 2 - strokeWidth / 2;

    // circumference = Umfang
    const circumference = 2 * Math.PI * radius;


    const [offset, setOffset] = useState(0);

    // The circleRef property will produce a reference to the second circle, and then we can 
    // update its style on the DOM. WHAT??
    const circleRef = useRef(null);

    // Der progress wird als prop übergeben, hier wird berechnet wo der progress anfangen soll und 
    // im state gespeichert
    // über circleRef können wir auf den aktuellen ProgressCircle im DOM zugreifen und seine
    // styling properties verändern
    useEffect(() => {
        const progressOffset = ((hundredPercent - progress) / hundredPercent) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 0.9s ease-in-out;';
    }, [setOffset, circumference, progress, offset]);

    return (
<>
<Svg width={size} height={size}>
<InnerCircle
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
    />
    <ProgressCircle
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        ref={circleRef}
    />

 

<SvgCircleText x={center}  y={center}>
        {progress} {unit}
    </SvgCircleText>
</Svg>
</>


    )
}


TimerProgressBar.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired
}

export default TimerProgressBar;


// The progress bar component takes in five props:

//     size — the full width and height of the SVG
//     progress — the circular progress value
//     strokeWidth — the width (thickness) of the circles
//     circleOneStroke — the stroke color of first circle
//     circleTwoStroke — the stroke color of the second circle


   // strokeDasharray gibt an, wie lang die Striche sein sollen, zb gepunktet, gestrichelt
    // gemischt etc. und auch die Abstände zwischen den Strichen durch eine Liste von Zahlen. Hier nur ein Wert damit es nur einen langen 
    // Strich gibt in der Länge des Umfanges

    // strokeDashoffset gibt an, von wo das rendering des Strichs/der Striche anfängt

// useState soll stroke-dashoffset updaten, basierend auf dem progress
// der progress wird als prop in den useEffekt Hook gegeben
// useRef hook will get a reference to the second circle and then add a CSS transition property to the circle.