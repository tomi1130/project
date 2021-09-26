/* eslint-disable react-hooks/exhaustive-deps*/ 
import { Wrap ,WrapItem,Spinner,Center,useDisclosure} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUsers";
import { useLoginUser } from "../../hooks/UseLoginUser";

export const UserManagement:VFC=memo(()=>{
    const{getUsers,loading,users}=useAllUsers();
    const {isOpen,onOpen,onClose}=useDisclosure();
    const{onSelectUser,selectedUser}=useSelectUser();
    const{loginUser}=useLoginUser();

    useEffect(()=>getUsers(),[]);
    const onClickUser=useCallback((id:number)=>{
        onSelectUser({id,users,onOpen});
    },[users,onSelectUser,onOpen]);

    return (
        <>
        {loading?(
        <Center h="100vh">
            <Spinner />
        </Center>):(
            <Wrap p={{base:4,md:10}}>
             {users?.map((user)=>(
            <WrapItem key={user.id} mx="auto">
            <UserCard id={user.id}imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onClick={onClickUser}/>
            </WrapItem>
             ))}
            </Wrap>
        )}
        <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin}/>
        </>
    )
})