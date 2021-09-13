import styled from "styled-components"
import { SecondaryButtons } from "../atoms/buttons/SecondaryButtons"
import { useHistory } from "react-router"
import React from "react";
import { UserContext } from "../../providers/USerProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top =()=>{
    const history=useHistory();
    const setUserInfo = useSetRecoilState(userState);
    
    const onClickAdmin =()=>{
        setUserInfo({isAdmin:true})
        history.push("/users");
     }
    const onClickGeneral =()=>{
        setUserInfo({isAdmin:false})
        history.push("/users");
     }
    return(
        <SContainer>
            <h2>Topページです</h2>
            <SecondaryButtons onClick={onClickAdmin}>管理者ユーザー</SecondaryButtons>
            <br/>
            <br/>
            <SecondaryButtons onClick={onClickGeneral}>一般ユーザー</SecondaryButtons>
        </SContainer>
    )

}

const SContainer = styled.div`
text-align:center;
`