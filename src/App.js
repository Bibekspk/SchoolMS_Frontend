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

