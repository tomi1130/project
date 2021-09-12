/* eslint-disable array-callback-return */
import { Switch,Route} from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router =()=>{
    return(
        <Switch>
      <Route exact path="/">
        <Home />
        </Route>
        <Route path="/Page1" render ={({match:{url}})=>(
         <Switch>
             {Page1Routes.map((route)=>(
                 <Route key={route.path} exact = {route.exact} path={`${url}${route.path}`}>{route.children}</Route>
             ))}

          </Switch>)} />

          <Route path="/Page2" render ={({match:{url}})=>(
         <Switch>
             {Page2Routes.map((route)=>(
                 <Route key={route.path} exact = {route.exact} path={`${url}${route.path}`}>{route.children}</Route>
             ))}

          </Switch>)} />
          <Route path="*">
              <Page404 />
          </Route>


      </Switch>
    )
}