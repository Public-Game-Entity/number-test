/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, keyframes } from '@emotion/react'



function RootPage() {
    const [isClick, setClick] = useState(false)
    const [isShowDescription, setShowDescription] = useState(false)

    const fadeInBackground = keyframes`
        from {
            background-color: #1D1C20;
        }
        to {
            background-color: #151417;
        }
    `

    const fadeOutOpacity = keyframes`
    from {
        opacity: 100%
    }
    to {
        opacity: 0%
    }
    `
    
    const fadeOpacity = keyframes`
    0% {
        opacity: 0%
    }
    25% {
        opacity: 100%
    }
    75% {
        opacity: 100%
    }
    100% {
        opacity: 0%
    }
    `

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
    }

    return (
        <div css={animation} onClick={handleClick}>
            <p css={css({ 
                display: isShowDescription ? "none" : "",
                color: "#D9D0EB", 
                fontWeight: 500, 
                fontSize: "1rem",
                animationName: isClick ? `${fadeOutOpacity}` : "",
                animationDuration: "1s",
                animationDelay: "0.5s",
                animationFillMode: "forwards" 
            })}>아무곳이나 클릭해서 게임을 시작하세요</p>

            <p css={css({ 
                display: isShowDescription ? "" : "none",
                color: "#D9D0EB", 
                fontWeight: 700, 
                fontSize: "1.618rem",
                animationName: isShowDescription ? `${fadeOpacity}` : "",
                animationDuration: "3s",
                animationFillMode: "forwards"
            })}>보이는 숫자를 잘 기억하세요</p>
        </div>
    );
}
  
export default RootPage;