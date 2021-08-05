import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Login} from './components/auth/login/login';
import {Register} from './components/auth/register/register'
import { AddStudent } from './components/students/AddStudents/addStudents';

export const AppRouting=()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/add-student' component={AddStudent}></Route>
        </Switch>
    </BrowserRouter>        
    )
}