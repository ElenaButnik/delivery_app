import { all } from 'redux-saga/effects';
import { orderSaga, orderItemSaga } from './orders/saga/orderSaga';

export default function* rootSaga() {
  yield all([orderSaga(), orderItemSaga()]);
}
