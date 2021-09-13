import styled from "styled-components"
import { SerchInput } from "../molecules/SerchInput"
import { UserCards } from "../organisms/user/UserCards"

const users=[...Array(10).keys()].map(((val)=>{
    return{
            id:val,
            name:"田中",
            image:"https://source.unsplash.com/mJaD10XeD7w",
            email:"123546@aaa.com",
            phone:"050-2154-6987",
            company:{
            name:"テスト株式会社a",
            },
            website:"https://google.com",
    }
}))

export const Users = ()=>{
    return(
        <SContainer>
            <h2>ユーザー一覧です</h2>
            <SerchInput　/>
            <SUserArea>
            {users.map((user)=>(
                <UserCards key={users.id} user={user} />
            ))}
            </SUserArea>
        </SContainer>
    )

}

const SContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:24px;
`
const SUserArea = styled.div`
    padding-top:40px;
    width:100%;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    grip-gap:20px;
`