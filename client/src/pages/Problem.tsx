/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css, keyframes } from '@emotion/react'
import { NumberBlock } from '../components/Number'
import { NumberPad } from "../components/NumberPad";


function ProblemPage() {
    const [numbers, setNumbers] = useState([])
    const [numberLength, setNumberLength] = useState(4)
    const [showedNumbers, setShowedNumbers] = useState([])
    const [index, setIndex] = useState(0)
    const [intervalTime, setIntervalTime] = useState(2000)
    const [showSolvePanel, setShowSolvePanel] = useState(false)

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

    const getRandomList = () => {
        let list = []
        for (let index = 0; index < numberLength; index++) {
            const randomNumber = getRandomNumber()
            list.push(randomNumber)
        }

        return list
    }




    useEffect(() => {
        const startNumber = index * 2
        const endNumber = startNumber + 2
        const selectedNumbers =  numbers.slice(startNumber, endNumber)
        setShowedNumbers(selectedNumbers)

        if (endNumber > numberLength) {
            setShowSolvePanel(true)
        }
    }, [index])

    useEffect(() => {
        const list = getRandomList()
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
            <div css={css({ display: showSolvePanel ? "none" : "" })}>

            </div>

            {showedNumbers.map(el => (
                <NumberBlock number={el}></NumberBlock>
            ))}

            <div css={css({ display: showSolvePanel ? "" : "none" })}>
                <Solve></Solve>
            </div>

        </div>
    );
}

function Solve() {
    const [clickedNumbers, setClickedNumbers] = useState([-1, -1])
    const [value, setValue] = useState('')

    const handleClickNumberPad = (e: any) => {
        console.log(e.target.id)
        const id = e.target.id
        if (Number.isInteger(Number(id))) {
            setValue(value + id)
        }

        if (id == "keyboard_backspace") {
            setValue(value.slice(0, value.length - 1))
        }
    }

    return (
        <div>
            <div css={css({ display: "flex" })}>
                {value}
                {/* <NumberBlock number={clickedNumbers[0]}></NumberBlock>
                <NumberBlock number={clickedNumbers[1]}></NumberBlock> */}

            </div>
            <NumberPad onClick={handleClickNumberPad}></NumberPad>

        </div>
    )
}


export default ProblemPage;