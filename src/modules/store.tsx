import { configureStore, Store } from '@reduxjs/toolkit'
import React from 'react';
import { reducer } from './reducer';
import rootReducer from './rootReducer'
import { userInfo } from './userTasksType';

const store = configureStore({
  reducer: rootReducer
})

const initialState: number = 0;

export const Stores = React.createContext<number | any>(initialState);

export const StoreProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Stores.Provider value={{ state, dispatch }}> { children} </Stores.Provider>
  )
};

export type AppDispatch = typeof store.dispatch

export default store