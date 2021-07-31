// import './App.css';
// import { Login } from './components/auth/login/login'
import { NavBar } from '../src/components/shared/navbar';
// import { Register } from './components/auth/register/register'
import {AppRouting} from './app.routing'
import { Provider } from 'react-redux';
import { store } from './store'

export default function App() {
  return (
    <Provider store={store}>
      <>
        <AppRouting></AppRouting>

      </>
    </Provider>

  );
}

