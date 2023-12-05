/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, keyframes } from '@emotion/react'


type NumberComponentsType = {
    number?: number | string
    onClick?: any
    icon?: string
}

function Number({ number, onClick, icon = '' }: NumberComponentsType) {
    return (
        <div onClick={onClick} css={css({ display: "flex", justifyContent: "center", 
            textAlign: "center", 
            alignItems: "center",  
            width: "4rem", 
            height: "4rem", 
            fontSize: "1.6rem",
            backgroundColor: "#1D1C20", 
            borderRadius: "0.4rem", 
            color: "#D9D0EB" 
        })}>
            <span>{number}</span>
            
        </div>
    );
}
  
export { Number };