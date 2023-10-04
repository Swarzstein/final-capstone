// // Entry point for the build script in your package.json
// // import "@hotwired/turbo-rails"
// // import "./controllers"
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root'),
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { fetchTripPackagesAsync } from './redux/tripPackageSlice';

store.dispatch(fetchTripPackagesAsync());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);