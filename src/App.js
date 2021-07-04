// import './App.css';
import { Login } from './components/auth/login/login'
import { NavBar } from '../src/components/shared/navbar';
import { Provider } from 'react-redux';
import { store } from './store'

export default function App() {
  return (
    <Provider store={store}>
      <>
        <NavBar></NavBar>
        <Login></Login>
      </>
    </Provider>

  );
}

