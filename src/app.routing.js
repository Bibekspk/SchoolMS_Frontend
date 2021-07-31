import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Login} from './components/auth/login/login';
import {Register} from './components/auth/register/register'

// const ProptectedRoute =({Component:component, ...rest})=>{
//     return (

//     )
// }

export const AppRouting=()=>{
    return(
    <BrowserRouter>
        <Switch>
            {/* <Route path="/" component={Home}></Route> */}
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
        </Switch>
    </BrowserRouter>        
    )
}