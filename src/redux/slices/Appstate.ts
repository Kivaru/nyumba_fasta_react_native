import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {User} from '../types/authDataTypes';
import {House} from '../types/houseApiDataTypes';

type AppStateType = {
  user: User;
  selectedHouse: House;
};

const initialState: AppStateType = {
  user: {},
  selectedHouse: {},
} as AppStateType;

const appStateSlice = createSlice({
  name: 'appSate',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setSelectedHouse: (state, action: PayloadAction<House>) => {
      state.selectedHouse = action.payload;
    },
  },
});

export const {setUser, setSelectedHouse} = appStateSlice.actions;

export const selectAppState = (sate: RootState) => sate.appState;

export const appStateReducer = appStateSlice.reducer;
