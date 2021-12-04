import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register'
import { StudentListComponent } from './components/students/studentList/student.component';
import { AddStudent } from './components/students/AddStudents/addStudents';
import { NavBar } from './components/shared/navbar';
import { EditStudents } from './components/students/editStudentsDetails/editStudentsDetails';
import { SideBar } from './components/shared/sidebar/sidebar';
import { Attendance } from './components/students/attendance/attendance';
import history from './history.js';
import {studentDetails} from './components/students/studentDetail/studentDetails';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest} 
            render={(routeProps) => { 
              
                return (
                    localStorage.getItem("token")
                        ? <div>
                         <NavBar></NavBar>
                         <SideBar>
                          <Component {...routeProps}></Component>                              
                          </SideBar>
                        </div>
                        :
                         <Redirect to='/'></Redirect>
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
        <Router history ={history}>
            <Switch>
                <AuthRoute path='/' exact  component={Login}></AuthRoute>
                <AuthRoute path='/register' component={Register}></AuthRoute>
                <ProtectedRoute path="/home" component={Home}></ProtectedRoute>
                <ProtectedRoute path="/studentList" component={StudentListComponent}></ProtectedRoute>
                <ProtectedRoute path="/attendance" component={Attendance}></ProtectedRoute>
                <ProtectedRoute path="/editStudent/:id" component={EditStudents}></ProtectedRoute>
                <ProtectedRoute path="/addStudent" component={AddStudent}></ProtectedRoute>
                <ProtectedRoute path="/studentDetail/:id" component={studentDetails}></ProtectedRoute>
                <PublicRoute component={Error}></PublicRoute>
                
            </Switch>
        </Router>
    )
}