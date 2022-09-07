import {AppState} from '..';

export const isFirstTimeUser = (state: AppState) => state.user.firstTime;
