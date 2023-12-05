/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, keyframes } from '@emotion/react'

const fadeOutOpacity = keyframes`
    from {
        opacity: 100%;
    }
    to {
        opacity: 0%;
    }
`

const fadeInOpacity = keyframes`
    from {
        opacity: 0%;
    }
    to {
        opacity: 100%;
    }
`

const fadeInBackground = keyframes`
    from {
        background-color: #1D1C20;
    }
    to {
        background-color: #151417;
    }
`


const waveHand = keyframes`
    0% {
        transform: rotateZ(0deg);
    }
    25% {
        transform: rotateZ(10deg);
    }
    75% {
        transform: rotateZ(10deg);
    }
    100% {
        transform: rotateZ(0deg);
    }
`


const fadeInAndOutOpacity = keyframes`
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

export { fadeOutOpacity, fadeInOpacity, waveHand, fadeInAndOutOpacity, fadeInBackground }