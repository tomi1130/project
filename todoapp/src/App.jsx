import React, { useEffect, useState } from 'react';
import ColorfulMessage from "./components/ColorfulMesseage"

const App = () =>{

  const [num,setNum] = useState(0);
  const [faceflag,faseset] =useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchshow = () =>{
    faseset(!faceflag);
  };


  useEffect(() => {
    if(num %3 === 0 ){
      faceflag || faseset(true);
    }
    else{
      faceflag && faseset(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[num]);


    return (
        <>
        <ColorfulMessage color = "blue">お元気ですか？</ColorfulMessage>
        <ColorfulMessage color = "pink">元気です</ColorfulMessage>
        <button onClick={onClickCountUp}>カウントアップ</button><br />
        <button onClick = {onClickSwitchshow}>on/off</button>
        <p>{num}</p>
        {faceflag &&  <p>( ^^)</p>}
        </>
      );

};

export default App;