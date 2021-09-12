import { Link } from "react-router-dom"

export const Page2=()=>{
    return(
        <div>
            <p>page2</p>
            <Link to = "/Page2/100">URL Parameter</Link>
            <br/>
            <Link to = "/Page2/100?name=hogehoge">Query Parameter</Link>
        </div>
    )


}