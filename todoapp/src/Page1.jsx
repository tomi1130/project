import { Link } from "react-router-dom"

export const Page1=()=>{
    return(
        <div>
            <p>page1</p>
            <Link to="/Page1/DetailA">DetailA</Link><br/>
            <Link to="/Page1/DetailB">DetailB</Link>
        </div>
    )


}