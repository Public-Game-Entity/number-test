/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css, keyframes } from '@emotion/react'
import { fadeInOpacity } from "../styles/keyframeAnimation";


type NumberComponentsType = {
    number?: number | string
    onClick?: any
    icon?: string
}

function NumberBlock({ number, onClick, icon = '' }: NumberComponentsType) {
    const [animationName, setAnimationName] = useState<any>()

    useEffect(() => {
        setAnimationName(fadeInOpacity)
        setTimeout(() => {
            setAnimationName('')

        }, 400)
    }, [number])

    return (
        <div onClick={onClick} id={`${icon == "" ? number : icon}`} css={css({ display: "flex", justifyContent: "center", 
            textAlign: "center", 
            alignItems: "center",  
            width: "4rem", 
            height: "4rem", 
            fontSize: "1.6rem",
            backgroundColor: "#1D1C20", 
            borderRadius: "0.4rem", 
            color: "#D9D0EB",
            cursor: "pointer",
            animationName: `${animationName}`,
            animationDuration: "0.3s",
            animationFillMode: "forwards"
        })}>
            {icon == "" ? (
                <span id={`${number}`}>{number}</span>

            ) : (
                <span id={icon} className="material-symbols-outlined">{icon}</span>

            )}
            
        </div>
    );
}
  
export { NumberBlock };