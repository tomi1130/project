import React from "react";
import { BrowserRouter,Link } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return(
    <>

      <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
        <br />
      </div>
      <Router />
      
      </BrowserRouter>


    </>
  )
}

export default App;
