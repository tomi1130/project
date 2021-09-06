import React, {useState,useCallback,useMemo} from "react";
import { ChildArea } from "./ChildArea";


function App() {
  console.log("App");
  const [text,setText] = useState(0);
  const [open,setOpen] = useState(false);

  const onClickOpen = ()=>setOpen(!open);
  const onChange =(e)=>setText(e.target.value);
  const onClickClose = useCallback(()=>setOpen(false),[setOpen]);
  const temp = useMemo(()=>1+3,[]);
  console.log(temp);

  return (
    <>
    <input value = {text} onChange = {onChange}/>
    <br />
    <br />
    <button onClick = {onClickOpen}>表示</button>
  <ChildArea open = {open} onClickClose = {onClickClose}/>
    </>
  );
}

export default App;
