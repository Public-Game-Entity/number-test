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
    const [isWrong, setIsWrong] = useState(false)

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

    const isDesktop = (): boolean => {
        return !navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
    }

    const getRandomNumber = (): number => {
        return Math.floor(Math.random() * 10)
    }

    const setNextSelectedNumber = (): void => {
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
        setIsWrong(false)
        setStage((stage) => stage + 1)
    }

    const handleClickNumberPad = (e: any) => {
        const id = e.target.id
        if (Number.isInteger(Number(id))) {
            setValue(value + id)
        }

        if (id == "keyboard_backspace") {
            setValue(value.slice(0, value.length - 1))
        }
    }

    const handleKeyInput = (e: any) => {
        if (!isDesktop()) {
           return false 
        }

        if (e.key == "Backspace") {
            setValue((value) => value.slice(0, value.length - 1))
            return true
        }

        if (!Number.isInteger(Number(e.key))) {
            return false
        }

        setValue((value) => value + String(e.key))
    }


    useEffect(() => {
        const isAnswer = isCurrectAnswer()
        if (isAnswer) {
            setTimeout(() => {
                setIsCurrect(true)

            }, 300)
        }

        if (isAnswer == false && value.length >= numberLength - 2) {
            setTimeout(() => {
                setIsWrong(true)
            }, 300)
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
        setNumbers(list)

        const selectedNumbers = list.slice(0,2)
        setShowedNumbers(selectedNumbers)

        const interval = setInterval(() => {
            setNextSelectedNumber()
        }, intervalTime)     
        
        setIntervalNext(interval)
    }, [stage])

    useEffect(() => {
        document.addEventListener("keydown", handleKeyInput)
    }, [])


    return (
        <div css={animation}>
            <div css={css({ display: showSolvePanel ? "none" : "" })}>

            </div>

            {showedNumbers.map(el => (
                <NumberBlock randomNumber={Math.random()} number={el}></NumberBlock>
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
                    <p css={css({ color: "#D9D0EB", fontSize: "1.6rem" })}>정답입니다</p>

                    <div css={css({ display: "flex", justifyContent: "center", alignSelf: "center", marginTop: "auto", padding: "1rem", width: "100%" })}>
                        <Button onClick={handleNextProblem}>다음 문제</Button>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={isWrong}>
                <div css={css({ display: "flex", justifyContent: "center", flexDirection: "column", flex: "1" })}>
                    <p css={css({ color: "#D9D0EB", fontSize: "1.6rem" })}>오답입니다</p>

                    <div css={css({ display: "flex", justifyContent: "center", alignSelf: "center", marginTop: "auto", padding: "1rem", width: "100%" })}>
                        <Button onClick={handleNextProblem}>다음 문제</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}


export default ProblemPage;