import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./sagas/rootSaga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const middleware = [
        sagaMiddleware,
    ];
    const store = createStore(rootReducer, compose(applyMiddleware(... middleware)));
    sagaMiddleware.run(rootSaga, store.dispatch);
    return store;
}
