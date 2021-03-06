/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_TRANSACTIONS,
  LOAD_TRANSACTIONS_ERROR,
  LOAD_TRANSACTIONS_SUCCESS,
  LOAD_UNCONFIRMED,
  SET_PAGE,
  SET_TRANSACTION_TYPE,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  transactions: [],
  pageCount: 0,
  currentPage: 1,
  txType: null,
  unconfirmed: false,
});

function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRANSACTIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('transactions', [])
        .set('pageCount', 0)
        .set('unconfirmed', false);
    case LOAD_UNCONFIRMED:
      return state
        .set('loading', true)
        .set('error', false)
        .set('transactions', [])
        .set('unconfirmed', true);
    case LOAD_TRANSACTIONS_SUCCESS: {
      const unconfirmed = state.get('unconfirmed');
      return state
        .set('transactions', action.transactions)
        .set(
          'pageCount',
          unconfirmed ? action.transactions.length : action.pages,
        )
        .set('loading', false)
        .set('error', false);
    }
    case LOAD_TRANSACTIONS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SET_PAGE:
      return state.set('currentPage', action.page);
    case SET_TRANSACTION_TYPE:
      return state.set('txType', action.txType);
    default:
      return state;
  }
}

export default transactionsReducer;
