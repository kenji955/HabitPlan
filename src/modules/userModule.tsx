import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type State = {
    userId: string;
};

const initialState: State = {
    userId: ''
};

const userModule = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state: State, action: PayloadAction<string>) {
            console.log('login');
            // console.log(action.payload);
            console.log(state.userId);
            state.userId = action.payload;
            console.log(state.userId);
        },
        logout(state: State) {
            console.log('logout');
            state.userId = ''
        },

    },
});

export const { login, logout } = userModule.actions;

export default userModule;
