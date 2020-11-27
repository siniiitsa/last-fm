import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';

import { getTopTracks } from './api/last-fm';

getTopTracks(10).then(console.log);

const runApp = () => {
  const store = configureStore();

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default runApp;
