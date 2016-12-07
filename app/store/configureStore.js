/*import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../redux/reducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}*/

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'
import rootReducer from '../redux/reducer'
import {initState} from '../test/date'

  const createStoreWithMiddleware = applyMiddleware(
   thunkMiddleware
  // createLogger()
 )(createStore)

 export default function configureStore(initialState) {
   const store = createStoreWithMiddleware(rootReducer, initialState)
  //const store=initState;
  console.log(store,'123');
  /* if (module.hot) {
     module.hot.accept('../redux/reducer', () => {
       const nextRootReducer = require('../redux/reducer')
       store.replaceReducer(nextRootReducer)
     })
   }*/

  return store
 }
