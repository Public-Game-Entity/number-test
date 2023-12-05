/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, keyframes } from '@emotion/react'

import { Number } from './Number'

function NumberPad() {


    return (
        <div css={css({ 
            display: "flex", 
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem"
        })}>
            <div css={css({ display: "flex", justifyContent: "center", gap: "1rem" })}>
                <Number number={1}></Number>
                <Number number={2}></Number>
                <Number number={3}></Number>
            </div>

            <div css={css({ display: "flex", justifyContent: "center", gap: "1rem" })}>
                <Number number={4}></Number>
                <Number number={5}></Number>
                <Number number={6}></Number>
            </div>

            <div css={css({ display: "flex", justifyContent: "center", gap: "1rem" })}>
                <Number number={7}></Number>
                <Number number={8}></Number>
                <Number number={9}></Number>
            </div>

            <div css={css({ display: "flex", justifyContent: "center", gap: "1rem" })}>
                <Number number={""}></Number>
                <Number number={0}></Number>
                <Number number={"-"}></Number>
            </div>
        </div>


    );
}
  
export { NumberPad };