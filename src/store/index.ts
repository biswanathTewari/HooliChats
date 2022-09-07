import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import user from './user/user.store';
import {persistConfig} from './persistConfig';

const combineReducer = combineReducers({
  user,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/logout') {
    // eslint-disable-next-line
    const {language, tutorialStatus} = state;
    state = {language, tutorialStatus};
  }
  return combineReducer(state, action);
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './user/user.selector';
export * from './user/user.store';
