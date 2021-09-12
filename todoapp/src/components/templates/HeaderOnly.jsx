import { Header } from "../atoms/Layout/Header";

export const HeaderOnly=(props)=>{
    const{children}=props;
    return(
        <>
        <Header />
        {children}
        </>
    )
}