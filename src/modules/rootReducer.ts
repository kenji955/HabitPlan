import { combineReducers } from '@reduxjs/toolkit';
import tasksModule from './tasksModule';
import userModule from './userModule';

const rootReducer = combineReducers({
    tasks: tasksModule.reducer,
    user: userModule.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer