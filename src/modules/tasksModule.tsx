import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calendar, pattern, tasks, userTask,userTaskInfo } from "./userTasksType";

type State = {
    [key: string]: string;
};

const initialState: userTask = {
    userTaskInfo: {
        calendar: [
            {
                year: new Date("Thu, 01 May 1950 02:00:00").getFullYear(),
                month: new Date("Thu, 01 May 1950 02:00:00").getMonth() + 1,
                date: new Date("Thu, 01 May 1950 02:00:00").getDate(),
                PatternId: 999,
                tasks: [
                    {
                        detail1: "testDetail1",
                        detail2: "testDetail2",
                        flug: false,
                    },
                ],
            },
        ],
        pattern: [
            {
                patternId: 999,
                patternName: "testPattern1",
            },
        ],
        tasks: [
            {
                detail1: "testDetail1",
                detail2: "testDetail2",
                patternInfo: [
                    {
                        patternID: 999,
                        order: 999,
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
        init(state: userTask, action: PayloadAction<userTaskInfo>) {
            const data = action.payload;
            console.log('init data');
            console.log(data);
            // state = {...data};
            console.log('init state.userTaskInfo.calendar 前');
            console.log(state.userTaskInfo.calendar[0].PatternId);
            state.userTaskInfo = data;
            console.log('init state.userTaskInfo.calendar 後');
            console.log(state);
            // console.log(state.userTaskInfo.calendar[0]);
        },
        Register(state: userTask, action: PayloadAction<userTask>) {
            const data = action.payload;

            state = { ...state, ...data };
            // console.log('state');
            // console.log(state);
        },
        allDelete(state: userTask,) {
            state = initialState;
            console.log('check allDelete');
        }
    },
});

export const { init, Register, allDelete } = tasksModule.actions;

export default tasksModule;
