import { useState } from "react/cjs/react.development"

export const Checkbox = ({name}) =>{
    const [isCecked,setIsChecked] = useState(false);


    return(
        <p onClick={(e) =>setIsChecked(!isCecked)}>{isCecked ? '✅':'◆'}{name}</p>
    )

}