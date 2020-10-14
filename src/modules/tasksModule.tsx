import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calendar, pattern, tasks, userTask } from "./userTasksType";

type State = {
    [key: string]: string;
};

const initialState: userTask = {
    userTaskInfo: {
        calendar: [
            {
                year: new Date("Thu, 01 May 2008 02:00:00").getFullYear(),
                month: new Date("Thu, 01 May 2008 02:00:00").getMonth()+1,
                date: new Date("Thu, 01 May 2008 02:00:00").getDate(),
                PatternId: 1,
                tasks: [
                    {
                        detail1: "detail1",
                        detail2: "detail2",
                        flug: false,
                    },
                ],
            },
        ],
        pattern: [
            {
                patternId: 1,
                patternName: "pattern1",
            },
        ],
        tasks: [
            {
                detail1: "detail1",
                detail2: "detail2",
                patternInfo: [
                    {
                        patternID: 1,
                        order: 1,
                    },
                ],
            },
        ],
    },
};

const tasksModule = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        Register(state: userTask, action: PayloadAction<userTask>) {
            const data = action.payload;
        
            state = { ...state, ...data };
            // console.log('state');
            // console.log(state);
        },
    },
});

export const { Register } = tasksModule.actions;

export default tasksModule;
