import React, {useState,useCallback,useMemo} from "react";
import { CssModules } from "./compornents/CssModules";
import { Emotion } from "./compornents/Emotion";
import { InlineStyle } from "./compornents/InlineStyle";
import { StyledComponents } from "./compornents/styledCompornents";
import { StyledJsx } from "./compornents/styledJsx";

function App() {
  return(
    <>
    <InlineStyle />
    <CssModules />
    <StyledJsx />
    <StyledComponents/>
    <Emotion/>
    </>
  )
}

export default App;
