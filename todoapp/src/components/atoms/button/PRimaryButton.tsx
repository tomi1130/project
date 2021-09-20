import { memo, ReactNode, VFC } from "react";
import { Button, IconButton } from "@chakra-ui/button"
import { HamburgerIcon } from "@chakra-ui/icons";

type Props={
    children:ReactNode;
    disabled?:boolean;
    loading?:boolean;
    onClick:()=>void;
}

export const PrimaryButton:VFC<Props> =memo((props)=>{
    const {children, disabled=false, loading=false,onClick}=props;
    return(
        <Button bg="teal.400" color="white" _hover={{opacity:0.8}} onClick={onClick} isLoading={loading} disabled={disabled||loading}>{children}</Button>
    )
})