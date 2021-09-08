import React, {useState,useCallback,useMemo} from "react";
import { BrowserRouter,Link ,Switch,Route} from "react-router-dom";
import { Home } from "./Home";
import { Page2 } from "./Page2";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";


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
      <Switch>
      <Route exact path="/">
        <Home />
        </Route>
        <Route path="/Page1" render ={({match:{url}})=>(
         <Switch>
          <Route exact path={url}>
          <Page1 />
          </Route>
          <Route path={`${url}/DetailA`}>
          <Page1DetailA />
          </Route>
          <Route path={`${url}/DetailB`}>
          <Page1DetailB />
          </Route>
          </Switch>)} />

        <Route path="/Page2">
        <Page2 />
        </Route>

      </Switch>
      </BrowserRouter>


    </>
  )
}

export default App;
