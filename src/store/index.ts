import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import {middleware, sagaMiddleware} from './middleware';
import {rootSaga} from './rootSaga';
import {persistConfig} from './persistConfig';

import auth from './auth/auth.store';
import posts from './posts/posts.store';

const combineReducer = combineReducers({
  auth,
  posts,
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
  middleware,
});

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './auth/auth.selectors';
export * from './auth/auth.store';
export * from './posts/posts.selectors';
export * from './posts/posts.store';
