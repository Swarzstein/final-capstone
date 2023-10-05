import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import App from './App';
import { getUser } from './redux/sessionReducer/sessionActions';
import { fetchTripPackagesAsync } from './redux/tripPackageSlice';

store.dispatch(fetchTripPackagesAsync());

store.dispatch(getUser());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
