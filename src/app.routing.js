import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register'
import { StudentListComponent } from './components/students/studentList/student.component';
import { AddStudent } from './components/students/AddStudents/addStudents';
import { NavBar } from './components/shared/navbar';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest} 
            render={(routeProps) => { 
              
                return (
                    localStorage.getItem("token")
                        ? <div>
                         <NavBar></NavBar>
                          <Component {...routeProps}></Component>                              
                        
                        </div>
                        : <Redirect to='/login' ></Redirect>
                )
            }}
        ></Route>
    )
}

const AuthRoute=({component:Component, ...rest})=>{
    return(
        <Route
        {...rest}
        render={(routeProps)=>{
            return (
                <>
                <NavBar></NavBar>
                <Component {...routeProps}></Component>
                </>
            )
        }}></Route>
    )

}

const PublicRoute=({component:Component, ...rest})=>{
    return (
        <Route {...rest}
        render={(routeProps)=>{
            return(
                <>
                <NavBar></NavBar>
                <Component {...routeProps}></Component>
                </>
            )
        }}></Route>
    )
}

const Home =()=>{
    let user = JSON.parse(localStorage.getItem('user'))
    return (
        <>
        <h1>Welcome, {user.fullname} </h1>
        </>
    )
}

const Error =()=>{
    return (
        <>
        <h1 className="text-center">404 Error</h1>
        </>
    )
}

export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Switch>
                <AuthRoute path='/login'  component={Login}></AuthRoute>
                <AuthRoute path='/register' component={Register}></AuthRoute>
                <ProtectedRoute path="/" exact component={Home}></ProtectedRoute>
                <ProtectedRoute path="/studentList" component={StudentListComponent}></ProtectedRoute>
                <PublicRoute path="/addStudent" component={AddStudent}></PublicRoute>
                <PublicRoute component={Error}></PublicRoute>
                
            </Switch>
        </BrowserRouter>
    )
}