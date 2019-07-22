import { createStore, applyMiddleware } from "redux";
import postsReducer from "../reducers/posts";
import createSagaMiddleware from "redux-saga";
import  {postsWatcher } from "../sagas";
import logger from 'redux-logger';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(postsReducer, applyMiddleware(sagaMiddleWare,logger));

sagaMiddleWare.run(postsWatcher);
export default store;

// const sagaMiddleWareBrands = createSagaMiddleware();

// const storeBrands = createStore(postsReducer,applyMiddleware(sagaMiddleWareBrands));

// sagaMiddleWareBrands.run(brandsWatcher);
// console.log(storeBrands);

// //export storeBrands;