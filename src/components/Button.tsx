/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, keyframes } from '@emotion/react'


type ButtonType = { 
    children?: any
    onClick?: any
}

function Button({ children, onClick }: ButtonType) {
    return (
        <button onClick={onClick} css={css({ 
            padding: "0.8rem 1rem",
            fontSize: "1rem",
            backgroundColor: "#1D1C20", 
            borderRadius: "0.4rem", 
            color: "#D9D0EB",
            border: "none",
            cursor: "pointer"
        })}>
           {children}
            
        </button>
    );
}
  
export { Button };