/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from '@emotion/react'



function RootPage() {
    return (
        <div css={css({ display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", backgroundColor: "#1D1C20", width: "100%", height: "100%", boxShadow: "0 0 0 0.6rem #151417 inset" })}>
            <p css={css({ color: "#D9D0EB", fontWeight: 500 })}>아무곳이나 클릭해서 게임을 시작하세요</p>
        </div>
    );
}
  
export default RootPage;