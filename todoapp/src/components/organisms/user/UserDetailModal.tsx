import { ChangeEvent, memo, ReactNode, useEffect, useState, VFC } from "react";
import { Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,Stack,FormControl,FormLabel,Input,ModalCloseButton,ModalFooter} from "@chakra-ui/react";
import { User } from "../../../types/api/User";
import { PrimaryButton } from "../../atoms/button/PRimaryButton";

type Props={
    isOpen:boolean;
    onClose:()=>void;
    user:User|null;
    isAdmin?:boolean;
}

export const UserDetailModal:VFC<Props> =memo((props)=>{
    const {isOpen,onClose,user,isAdmin=false}=props;
    const [name,setName] =useState('');
    const [email,setEmail] =useState('');
    const [userName,setUserName] =useState('');
    const [phone,setPhone] =useState('');

    const onChangeUserName =(e:ChangeEvent<HTMLInputElement>)=>setUserName(e.target.value);
    const onChangeName =(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value);
    const onChangeEmail =(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value);
    const onChangePhone =(e:ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value);

    useEffect(()=>{
        setName(user?.username??'');
        setEmail(user?.email??'');
        setUserName(user?.name??'');
        setPhone(user?.phone??'');
    },[user])

    const onClickUpdate=()=>{
        alert();
    }
    return(
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInRight">
        <ModalOverlay />
        <ModalContent pb={6}>
            <ModalHeader> ユーザー詳細</ModalHeader>
            <ModalCloseButton/>
            <ModalBody mx={4}>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>名前</FormLabel>
                        <Input value={userName} onChange={onChangeUserName} isReadOnly={!isAdmin} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>フルネーム</FormLabel>
                        <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin}  />
                    </FormControl>
                    <FormControl>
                        <FormLabel>MAIL</FormLabel>
                        <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin}  />
                    </FormControl>
                    <FormControl>
                        <FormLabel>TEL</FormLabel>
                        <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin}  />
                    </FormControl>
                </Stack>
            </ModalBody>
            {isAdmin&&(
            <ModalFooter>
                <PrimaryButton onClick={onClickUpdate}>
                    更新
                </PrimaryButton>
            </ModalFooter>
            )}
        </ModalContent>
    </Modal>
    )
})