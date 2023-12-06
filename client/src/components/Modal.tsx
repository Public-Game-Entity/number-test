/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, keyframes } from '@emotion/react'
import { fadeInBackground, fadeInOpacity } from "../styles/keyframeAnimation";



function Modal({ children, isOpen = false }) {



    return (
        <div css={css({ 
            display: isOpen ? "flex" : "none",
            position: "absolute",
            justifyContent: "center", 
            textAlign: "center", 
            alignItems: "center", 
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backdropFilter: "brightness(60%)",
            animationName: `${fadeInOpacity}`,
            animationDuration: "0.3s",
            animationFillMode: "forwards"
        })}>
                <div css={css({ 
                    display: "flex", 
                    backgroundColor: "#151417",
                    borderRadius: "0.4rem",
                    justifyContent: "center", 
                    textAlign: "center", 
                    width: "60vw",
                    height: "60vh",
                    opacity: "0%",
                    animationName: `${fadeInOpacity}`,
                    animationDuration: "0.3s",
                    animationFillMode: "forwards"
                })}>
                    {children}
                </div>
        </div>
    );
}
  
export { Modal };