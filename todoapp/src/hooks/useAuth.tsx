import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router";
import { User } from "../types/api/User";
import { useLoginUser } from "./UseLoginUser";
import { useMesseage } from "./useMessage";

export const useAuth=()=>{
    const history=useHistory();
    const {showMessage}=useMesseage();
    const {setLoginUser}=useLoginUser();

    const [loading,setLoading] = useState(false);

    const login = useCallback(
        (id:string)=>{
            setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{
            if(res.data){
                const isAdmin=res.data.id === 10 ? true:false;
                setLoginUser({...res.data, isAdmin});
                history.push("/home");
                showMessage({title:"ログインしました",status:"success"})
            }else{
                showMessage({title:"ユーザーが見つかりません",status:"error"});
                setLoading(false);
            }
        }).catch(()=>{
            showMessage({title:"ログインできません",status:"error"});
            setLoading(false);
    });
    },
    [history,showMessage,setLoginUser])
    return{login,loading};
}