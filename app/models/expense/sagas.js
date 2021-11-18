import { takeEvery } from '@redux-saga/core/effects';
import { CREATE_EXPENSE } from './actions';

function* handler() {
  yield takeEvery(CREATE_EXPENSE, createExpense);
}

function* createExpense(action) {
  try {
    // create expense
  } catch (err) {
    // handle err
  }
}

export { handler };
