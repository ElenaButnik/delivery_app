import { createAction } from '@reduxjs/toolkit';

export default function createApiRequestActions(
  type,
  prepareAction = args => ({ payload: args.payload }),
) {
  return {
    init: createAction(`${type}__INIT`, (payload = {}) => ({ payload })),

    request: createAction(`${type}__REQUEST`, args => {
      const { payload } = prepareAction(args);
      return { payload };
    }),
    start: createAction(`${type}__START`, (payload = {}) => ({ payload })),
    success: createAction(`${type}__SUCCESS`, (payload = {}) => ({ payload })),
    error: createAction(`${type}__ERROR`, (payload = {}) => ({ payload })),
  };
}
