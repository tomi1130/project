import styled from "styled-components"

export const Input=(props)=>{
    const{placeholder =""}=props;
    return <SInput placeholder = {placeholder} type="text"/>;
}

const SInput = styled.input`
    padding:8px 16px;
    border:solod #ddd 1px;
    border-radius:999px;
    outline:none;
`