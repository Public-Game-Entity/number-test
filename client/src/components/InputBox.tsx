/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, keyframes } from '@emotion/react'


function InputBox({ children }) {
    return (
        <div css={css({ display: "flex", justifyContent: "center", 
            textAlign: "center", 
            padding: "0.3rem 0.6rem",
            alignItems: "center",  
            minWidth: "5rem", 
            minHeight: "3rem", 
            fontSize: "1.6rem",
            backgroundColor: "#1D1C20", 
            borderRadius: "0.4rem", 
            color: "#D9D0EB" 
        })}>
            <span>{children}</span>
            
        </div>
    );
}
  
export { InputBox };