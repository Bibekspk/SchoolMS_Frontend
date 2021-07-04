// import './App.css';
// import {Login} from './components/auth/login/login'
import {NavBar} from '../src/components/shared/navbar'
import { Register } from './components/auth/register/register'

export default function App() {
  return (
    <>
    <NavBar></NavBar>
    {/* <Login></Login> */}
    <Register></Register>
    </>
  );
}

