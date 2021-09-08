/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx ,css} from "@emotion/react"
import styled from "styled-components"

export const Emotion =()=>{
    const containerStyle = css`
    border:solid 2px #392eff;
    border-radius:20px;
    padding:8px;
    margin:8px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
    const titleStyle = css({
        margin:"0px",
        color:"#3d84a8"
    })
    return(
        <div css = {containerStyle}>
            <p css ={titleStyle}>Emotion</p>
            <SButton>Fight!!</SButton>
        </div>
    )
}

const SButton = styled.button`
background-color:#abedd8;
border:none;
padding:8px;
border-radius:8px;
&:hover{
    background-color: #462;
    color: #a00;
    cursor: pointer;
}`