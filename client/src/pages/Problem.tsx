/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css, keyframes } from '@emotion/react'
import { Number } from '../components/Number'


function ProblemPage() {
    const [numbers, setNumbers] = useState([])
    const [showedNumbers, setShowedNumbers] = useState([])
    const [index, setIndex] = useState(0)
    const [intervalTime, setIntervalTime] = useState(2000)

    const animation = css({
        display: "flex", 
        justifyContent: "center", 
        textAlign: "center", 
        alignItems: "center", 
        backgroundColor: "#151417", 
        width: "100%", 
        height: "100%", 
        boxShadow: "0 0 0 0.6rem #151417 inset",
        gap: "0.8rem"
    })

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 10)
    }

    const setNextSelectedNumber = () => {
        setIndex((index) => index + 1)
    }


    useEffect(() => {
        const startNumber = index * 2
        const endNumber = startNumber + 2
        const selectedNumbers =  numbers.slice(startNumber, endNumber)
        setShowedNumbers(selectedNumbers)
    }, [index])

    useEffect(() => {
        const maxLength = 10
        let list = []
        for (let index = 0; index < maxLength; index++) {
            const randomNumber = getRandomNumber()
            list.push(randomNumber)
        }

        console.log(list)

        setNumbers(list)

        const selectedNumbers = list.slice(0,2)
        setShowedNumbers(selectedNumbers)

        setInterval(() => {
            setNextSelectedNumber()
        }, intervalTime)        
    }, [])


    return (
        <div css={animation}>
            {showedNumbers.map(el => (
                <Number number={el}></Number>

            ))}

        </div>
    );
}


export default ProblemPage;