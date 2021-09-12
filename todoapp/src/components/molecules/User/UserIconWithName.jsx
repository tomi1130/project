
import styled from "styled-components";

export const UserIconWithName =(props)=>{
    const {image ,name}=props;
    return(
        <Scontainer>
            <SImage height ={160} width ={160} src ={image} alt={name} />
            <Sname>{name}</Sname>
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