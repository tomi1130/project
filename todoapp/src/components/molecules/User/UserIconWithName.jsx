import React,{useContext} from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/USerProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";


export const UserIconWithName =(props)=>{
    console.log('UserIconWithName');
    const {image ,name}=props;
    // const {userInfo} =useContext(UserContext);
    const userInfo=useRecoilValue(userState);
    const isAdmin=userInfo?userInfo.isAdmin:false;
    return(
        <Scontainer>
            <SImage height ={160} width ={160} src ={image} alt={name} />
            <Sname>{name}</Sname>
            {isAdmin && <SEdit>編集</SEdit>}
        </Scontainer>
    )
}
const Scontainer=styled.div`
    text-align:center;

`

const SImage=styled.img`
    border-radius:50%;
`
const Sname=styled.p`
    font-size:18px;
    font-weight:bold;
    margin;0;
    color:#40514e;
`
const SEdit=styled.span`
text-decoration:underline;
color:#aaa;
cursor:pointer;`