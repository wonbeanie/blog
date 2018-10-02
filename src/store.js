import { createStore, applyMiddleware } from 'redux';
import modules from './Redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const customizedPromiseMiddleware = promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
});

let middlewares = applyMiddleware(ReduxThunk, customizedPromiseMiddleware);;

if (process.env.NODE_ENV === `development`) {
    const logger = createLogger(); 

    middlewares = applyMiddleware(logger, ReduxThunk, customizedPromiseMiddleware);
}

const store = createStore(modules, middlewares);

export default store;