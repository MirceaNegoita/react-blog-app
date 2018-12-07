import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from  './reducers';
import sagas from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

// # instantiate the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const middleware = applyMiddleware(  sagaMiddleware );

export  default createStore(
    reducer,
    composeEnhancers(
        middleware
    )
);

sagaMiddleware.run(sagas);