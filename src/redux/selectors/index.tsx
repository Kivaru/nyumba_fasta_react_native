import {RootState} from '../index';

export const selectUser = (state: RootState) => state.appState.user;

export const selectedHouse = (state: RootState) => state.appState.selectedHouse;
