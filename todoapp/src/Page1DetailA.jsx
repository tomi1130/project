import { useLocation ,useHistory} from "react-router";

export const Page1DetailA=()=>{
    const {state} =useLocation();
    const history = useHistory();
    console.log(state);

    const onClickReturn =()=>history.goBack();
    return(
        <div>
            <p>Page1DetailA</p>
            <button onClick={onClickReturn}>return</button>
        </div>
    )


}