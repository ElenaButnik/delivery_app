import { orderActions, orderItemActions } from './constants';
import { createApiRequestWatcher } from './utils';
import { createApiRequestWatcherItem } from '../saga/utils/createApiRquestSaga';

export const orderSaga = createApiRequestWatcher(orderActions);
export const orderItemSaga = createApiRequestWatcherItem(orderItemActions);
