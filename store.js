import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { reducer } from './app/models/root-reducer';
import { handler as expenseSaga } from './app/models/expense/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(expenseSaga);

export { store };
