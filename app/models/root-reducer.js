import { combineReducers } from 'redux';
import { reducer as expenseReducer } from './expense/reducers';

const reducer = combineReducers({
  expense: expenseReducer,
});

export { reducer };
