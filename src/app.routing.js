import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Login} from './components/auth/login/login';
import {Register} from './components/auth/register/register'

export const AppRouting=()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
        </Switch>
    </BrowserRouter>        
    )
}