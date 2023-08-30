import React from 'react';

import Router from './src/router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import storages from './src/storages/store';

const {store, persistor} = storages();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
