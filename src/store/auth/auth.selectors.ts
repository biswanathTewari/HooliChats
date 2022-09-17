import {AppState} from '..';

export const isFirstTimeUser = (state: AppState) => state.auth.firstTime;

export const isUserLoggedIn = (state: AppState) => state.auth.loggedIn;

export const getUserDetails = (state: AppState) => state.auth.user;
