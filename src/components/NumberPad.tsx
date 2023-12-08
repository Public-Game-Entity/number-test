/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css, keyframes } from '@emotion/react'

import { NumberBlock } from './Number'

type NumberPadComponentsType = {
    onClick?: any
}

function NumberPad({ onClick }: NumberPadComponentsType) {

 

    return (
        <div css={css({ 
            display: "flex", 
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem"
        })}>
            <div css={css({ display: "flex", justifyContent: "center", gap: "1rem" })}>
                <NumberBlock number={1} onClick={onClick}></NumberBlock>
                <NumberBlock number={2} onClick={onClick}></NumberBlock>
                <NumberBlock number={3} onClick={onClick}></NumberBlock>
            </div>

            <div css={css({ display: "flex", justifyContent: "center", gap: "1rem" })}>
                <NumberBlock number={4} onClick={onClick}></NumberBlock>
                <NumberBlock number={5} onClick={onClick}></NumberBlock>
                <NumberBlock number={6} onClick={onClick}></NumberBlock>
            </div>

            <div css={css({ display: "flex", justifyContent: "center", gap: "1rem" })}>
                <NumberBlock number={7} onClick={onClick}></NumberBlock>
                <NumberBlock number={8} onClick={onClick}></NumberBlock>
                <NumberBlock number={9} onClick={onClick}></NumberBlock>
            </div>

            <div css={css({ display: "flex", justifyContent: "center", gap: "1rem" })}>
                <NumberBlock number={""}></NumberBlock>
                <NumberBlock number={0} onClick={onClick}></NumberBlock>
                <NumberBlock icon={"keyboard_backspace"} onClick={onClick}></NumberBlock>
            </div>
        </div>


    );
}
  
export { NumberPad };