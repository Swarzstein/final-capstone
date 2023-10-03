// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import App from './App';
import { getUser } from './redux/sessionReducer/sessionActions';

store.dispatch(getUser());

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
