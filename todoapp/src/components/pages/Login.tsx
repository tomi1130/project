import { Flex ,Box,Heading,Divider,Input,Stack} from "@chakra-ui/react";
import { ChangeEvent, ChangeEventHandler, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PRimaryButton";

export const Login:VFC=memo(()=>{
const[userId,setUserId]=useState('');
const {login,loading}=useAuth();

const onClickLogin=()=>login(userId);

const onChangeUserId=(e:ChangeEvent<HTMLInputElement>)=>setUserId(e.target.value);
    return (
    <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
            <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
            <Divider my={4}/>
            <Stack spacing={5} py={4} px={10}>
            <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}/>
            <PrimaryButton onClick={onClickLogin} loading={loading} disabled={userId ===""}>ログイン</PrimaryButton>
            </Stack>
        </Box>
    </Flex>
        )
})