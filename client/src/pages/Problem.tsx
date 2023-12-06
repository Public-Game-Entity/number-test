/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css, keyframes } from '@emotion/react'
import { NumberBlock } from '../components/Number'
import { NumberPad } from "../components/NumberPad";
import { useHistory } from "react-router-dom";
import { Modal } from "../components/Modal";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";


function ProblemPage() {
    const history = useHistory()
    const [numbers, setNumbers] = useState([])
    const [numberLength, setNumberLength] = useState(4)
    const [showedNumbers, setShowedNumbers] = useState([])
    const [index, setIndex] = useState(0)

    const [intervalTime, setIntervalTime] = useState(2000)
    const [intervalNext, setIntervalNext] = useState<any>()

    const [showSolvePanel, setShowSolvePanel] = useState(false)
    const [stage, setStage] = useState(1)

    const [value, setValue] = useState('')
    const [isCurrect, setIsCurrect] = useState(false)



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

    const isCurrectAnswer = (): boolean => {
        const answerText = numbers.join('')
        if (answerText == '') {
            return false
        }

        if (value == answerText) {
            return true
        }

        return false
    }

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


    const handleNextProblem = () => {
        setIsCurrect(false)

        setStage((stage) => stage + 1)
    }

    useEffect(() => {
        const isAnswer = isCurrectAnswer()
        if (isAnswer) {
            setTimeout(() => {
                setIsCurrect(true)

            }, 500)
        }
    }, [value])


    useEffect(() => {
        const startNumber = index * 2
        const endNumber = startNumber + 2
        const selectedNumbers =  numbers.slice(startNumber, endNumber)
        setShowedNumbers(selectedNumbers)

        if (endNumber >= numberLength) {
            setShowSolvePanel(true)
        }
    }, [index])

    useEffect(() => {
        clearInterval(intervalNext)

        setShowSolvePanel(false)
        setValue('')

        setNumberLength((length) => length + 2)
        setIndex(0)
        const list = getRandomList()
        console.log(list)

        setNumbers(list)

        const selectedNumbers = list.slice(0,2)
        setShowedNumbers(selectedNumbers)

        const interval = setInterval(() => {
            setNextSelectedNumber()
        }, intervalTime)     
        
        setIntervalNext(interval)
    }, [stage])


    return (
        <div css={animation}>
            <div css={css({ display: showSolvePanel ? "none" : "" })}>

            </div>

            {showedNumbers.map(el => (
                <NumberBlock number={el}></NumberBlock>
            ))}

            <div css={css({ display: showSolvePanel ? "" : "none" })}>
                <div>
                    <div css={css({ display: "flex", textAlign: "center", justifyContent: "center", padding: "2rem" })}>
                        {/* <p css={css({ color: "#D9D0EB" })}>{value}</p> */}
                        <InputBox>{value}</InputBox>
                        {/* <NumberBlock number={clickedNumbers[0]}></NumberBlock>
                        <NumberBlock number={clickedNumbers[1]}></NumberBlock> */}

                    </div>
                    <NumberPad onClick={handleClickNumberPad}></NumberPad>

                </div>
            </div>

            <Modal isOpen={isCurrect}>
                <div css={css({ display: "flex", justifyContent: "center", flexDirection: "column", flex: "1" })}>
                    <p css={css({ color: "#D9D0EB" })}>정답입니다</p>

                    <div css={css({ display: "flex", justifyContent: "center", alignSelf: "center", marginTop: "auto", padding: "0.8rem", width: "100%" })}>
                        <Button onClick={handleNextProblem}>다음 문제</Button>
                    </div>

                </div>

            </Modal>


        </div>
    );
}

// { answer } 정답 props와 정답 체크 -> 정답 modal 표시 후 다음 문제

export default ProblemPage;