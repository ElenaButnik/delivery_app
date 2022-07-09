import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPostOrders, fetchGetOrderDetails } from '../../../../services/API';

function createApiRequestWorker(actions) {
  return function* worker({ payload }) {
    const { start, success, error } = actions;
    yield put(start());
    try {
      const response = yield call(fetchPostOrders, { ...payload });
      yield put(success(response.data));
    } catch (err) {
      yield put(error(err));
    }
  };
}

function createApiRequestWorkerItem(actions) {
  return function* worker({ payload }) {
    const { start, success, error } = actions;
    yield put(start());
    try {
      const response = yield call(fetchGetOrderDetails, payload);
      yield put(success(response.data));
    } catch (err) {
      yield put(error(err));
    }
  };
}

export default function createApiRequestWatcher(actions) {
  const { init } = actions;
  return function* watcher() {
    yield takeEvery(init, createApiRequestWorker(actions));
  };
}
export function createApiRequestWatcherItem(actions) {
  const { init } = actions;
  return function* watcher() {
    yield takeEvery(init, createApiRequestWorkerItem(actions));
  };
}
