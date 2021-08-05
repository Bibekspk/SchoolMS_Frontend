import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register'
import { Studentcomponent } from './components/pages/student/student.component';
import { NavBar } from './components/shared/navbar';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest} // rest is for eveything rather than component like exact, path of route
            render={(routeProps) => { //routeProps is the props of route location, match and history
                //Notice that we’re using render prop instead of the children element 
                //The reason for this is because render allows us to re-check if the user is authenticated every time the Route matches.
                // If instead we used the children element, React Router would only ever see the initial state of localstorage token.
                return (
                    localStorage.getItem("token")
                        ? <div>
                         <NavBar></NavBar>
                          <Component {...routeProps}></Component>                              
                        
                            {/* we are passing the routeProps it in component for its use */}
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
                <ProtectedRoute path="/studentList" component={Studentcomponent}></ProtectedRoute>
                <PublicRoute component={Error}></PublicRoute>
                
            </Switch>
        </BrowserRouter>
    )
}