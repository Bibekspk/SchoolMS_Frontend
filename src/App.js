import {AppRouting} from './app.routing'
import { Provider } from 'react-redux';
import { store } from './store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <AppRouting></AppRouting>
        <ToastContainer></ToastContainer>
      </>
    </Provider>

  );
}

