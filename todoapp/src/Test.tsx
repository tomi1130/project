import { VFC } from "react";

type Props={
    color:string;
    fontSize:string;
}

export const Test:VFC<Props>=(props)=>{
    const {color,fontSize,}=props;
    return <p style={{color,fontSize}}>aaa</p>;
}