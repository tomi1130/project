import { PrimaryButtons } from "../atoms/buttons/PrimaryButtons"
import { SecondaryButtons } from "../atoms/buttons/SecondaryButtons"
import { Input } from "../atoms/input/Input"
import styled from "styled-components"
import { memo } from "react";

export const SerchInput=memo(()=>{
    console.log('Serch');
    return(
        <SContainer>
            <Input placeholder = "検索条件を入力"/>
        <SButtonWrapper>
            <SecondaryButtons>検索</SecondaryButtons>
        </SButtonWrapper>
        </SContainer>
    );
});


const SButtonWrapper = styled.div`
    padding-left:8px;
    `

const SContainer = styled.div`
    display:flex;
    align-items:center;
    `