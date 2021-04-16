import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk'

import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { getFirestore, createFirestoreInstance } from 'redux-firestore'

import rootReducer from './app/reducers/rootReducer'
import firebase from './fbConfig'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(Thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById('root')
);


