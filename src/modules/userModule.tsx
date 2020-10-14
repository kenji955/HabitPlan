import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type State = {
   userId: string;
};

const initialState: State = {
    userId:''
};

const userModule = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state: State, action: PayloadAction<string>){
            state.userId = action.payload;
        },
        

    },
});

export const { login } = userModule.actions;

export default userModule;
