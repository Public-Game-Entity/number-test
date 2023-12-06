/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, keyframes } from '@emotion/react'
import { useHistory } from "react-router-dom";
import { fadeInAndOutOpacity, fadeInBackground, fadeOutOpacity, waveHand } from "../styles/keyframeAnimation";



function RootPage() {
    const history = useHistory()
    const [isClick, setClick] = useState(false)
    const [isShowDescription, setShowDescription] = useState(false)


    const animation = css({
        display: "flex", 
        justifyContent: "center", 
        textAlign: "center", 
        alignItems: "center", 
        backgroundColor: "#1D1C20", 
        width: "100%", 
        height: "100%", 
        boxShadow: "0 0 0 0.6rem #151417 inset",
        animationName: isClick ? `${fadeInBackground}` : "",
        animationDuration: "1s",
        animationFillMode: "forwards"
    })

    const handleClick = () => {
        setClick(true)
        setTimeout(() => {
            setShowDescription(true)
        }, 1000);

        setTimeout(() => {
            history.push("/problem")
        }, 4000)
    }

    return (
        <div css={animation} onClick={handleClick}>
            <div css={css({ 
                display: isShowDescription ? "none" : "",
                color: "#D9D0EB", 
                fontWeight: 500, 
                fontSize: "1rem",
                animationName: isClick ? `${fadeOutOpacity}` : "",
                animationDuration: "1s",
                animationDelay: "0.5s",
                animationFillMode: "forwards" 
            })}>
                <span css={css({ display: "block", fontSize: "3rem", animationName: `${waveHand}`, animationDuration: "0.8s", animationIterationCount: 2000 })} className="material-symbols-outlined">
                    right_click
                </span>
                <p>아무곳이나 클릭해서 게임을 시작하세요</p>
            </div>


            <p css={css({ 
                display: isShowDescription ? "" : "none",
                color: "#D9D0EB", 
                fontWeight: 700, 
                fontSize: "1.6rem",
                animationName: isShowDescription ? `${fadeInAndOutOpacity}` : "",
                animationDuration: "3s",
                animationFillMode: "forwards"
            })}>보이는 숫자를 잘 기억하세요</p>
        </div>
    );
}


export default RootPage;