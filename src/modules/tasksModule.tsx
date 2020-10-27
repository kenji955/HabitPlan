import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    calendar,
    pattern,
    tasks,
    userTask,
    userTaskInfo,
} from "./userTasksType";

type State = {
    [key: string]: string;
};

const initialState: userTask = {
    userTaskInfo: {
        calendar: {
            [new Date("Thu, 22 May 2020 02:00:00").getFullYear()]: {
                [new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1]: {
                    [new Date("Thu, 22 May 2020 02:00:00").getDate()]: {
                        PatternId: 1,
                        tasks: [
                            {
                                order: 1,
                                detail1: "testDetail1 22 1",
                                detail2: "testDetail2 22 1",
                                flug: false,
                            },
                            {
                                order: 2,
                                detail1: "testDetail1 22 2",
                                detail2: "testDetail2 22 2",
                                flug: false,
                            },
                        ],
                    },
                    [new Date("Thu, 23 May 2020 02:00:00").getDate()]: {
                        PatternId: 1,
                        tasks: [
                            {
                                order: 1,
                                detail1: "testDetail1 23 1",
                                detail2: "testDetail2 23 1",
                                flug: false,
                            },
                            {
                                order: 2,
                                detail1: "testDetail1 23 2",
                                detail2: "testDetail2 23 2",
                                flug: false,
                            },
                        ],
                    },
                },
            },
        },
        //             [date: number]: {
        //                 PatternId: number;
        //                 tasks: {
        //                     detail1: string;
        //                     detail2: string;
        //                     flug: boolean;
        //                 }[];
        //             }[];
        //         }[];
        //     }[];

        // ]
        // year: new Date("Thu, 22 May 2020 02:00:00").getFullYear(),[{
        //     month: new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1,[{
        //         date: new Date("Thu, 22 May 2020 02:00:00").getDate(),[{
        //             PatternId: 1,
        //             tasks: [
        //                 {
        //                     detail1: "testDetail1 22 1",
        //                     detail2: "testDetail2 22 1",
        //                     flug: false,
        //                 },
        //                 {
        //                     detail1: "testDetail1 22 2",
        //                     detail2: "testDetail2 22 2",
        //                     flug: false,
        //                 },
        //             ],

        //         }]

        //     }]

        // }]
        // {
        //     year: new Date("Thu, 23 May 2020 02:00:00").getFullYear(),
        //     month: new Date("Thu, 23 May 2020 02:00:00").getMonth() + 1,
        //     date: new Date("Thu, 23 May 2020 02:00:00").getDate(),
        //     PatternId: 2,
        //     tasks: [
        //         {
        //             detail1: "testDetail1 23 1",
        //             detail2: "testDetail2 23 1",
        //             flug: false,
        //         },
        //         {
        //             detail1: "testDetail1 23 2",
        //             detail2: "testDetail2 23 2",
        //             flug: false,
        //         },
        //     ],
        // },

        pattern: [
            {
                patternId: 1,
                patternName: "testPattern1",
            },
            {
                patternId: 2,
                patternName: "testPattern2",
            },
        ],
        tasks: [
            {
                detail1: "testDetail1A",
                detail2: "testDetail2A",
                patternInfo: [
                    {
                        patternID: 1,
                        order: 1,
                    },
                ],
            },
            {
                detail1: "testDetail1B",
                detail2: "testDetail2B",
                patternInfo: [
                    {
                        patternID: 1,
                        order: 2,
                    },
                ],
            },
            {
                detail1: "testDetail1C",
                detail2: "testDetail2C",
                patternInfo: [
                    {
                        patternID: 2,
                        order: 1,
                    },
                    {
                        patternID: 1,
                        order: 3,
                    },
                ],
            },
            {
                detail1: "testDetail1D",
                detail2: "testDetail2D",
                patternInfo: [
                    {
                        patternID: 2,
                        order: 2,
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
            console.log("init data");
            console.log(data);
            // state = {...data};
            console.log("init state.userTaskInfo.calendar 前");
            // console.log(state.userTaskInfo.calendar[0].PatternId);
            state.userTaskInfo = data;
            console.log("init state.userTaskInfo.calendar 後");
            console.log(state);
            // console.log(state.userTaskInfo.calendar[0]);
        },
        Register(state: userTask, action: PayloadAction<userTask>) {
            const data = action.payload;

            state = { ...state, ...data };
            // console.log('state');
            // console.log(state);
        },
        allDelete(state: userTask) {
            state = initialState;
            console.log("check allDelete");
        },
        // DayPlanにてタスクをクリックした際に完了フラグをtrueに変更する処理。引数にて年、月、日、タスクのインデックス番号を受け取っている。
        taskCheckComplete(state: userTask, action: PayloadAction<number[]>) {
            const index = state.userTaskInfo.calendar[action.payload[0]][
                action.payload[1]
            ][action.payload[2]].tasks.findIndex(
                (tasks) => tasks.order == action.payload[3]
            );
            console.log(index);
            state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][
                action.payload[2]
            ].tasks[index].flug = !state.userTaskInfo.calendar[
                action.payload[0]
            ][action.payload[1]][action.payload[2]].tasks[index].flug;
        },
        // 引数はstateと年、月、日、選択されているパターンIDの4つの数値が格納された配列
        calendarPatternRegster(
            state: userTask,
            action: PayloadAction<number[]>
        ) {
            // stateから選択されているパターンIDが設定されているタスクを抽出する。
            const choicePatternTasks = state.userTaskInfo.tasks.filter(
                function (task) {
                    return task.patternInfo.some(
                        (task) => task.patternID == action.payload[3]
                    );
                }
            );

            // パターンIDに紐付くタスク一覧からカレンダーへの登録情報を抽出する。
            const TodayTasks = choicePatternTasks.map((task) => {
                // パターンが複数登録されているタスクへの対応として、選択されているパターンIDに該当する要素だけを抽出する。
                const taskPattern = task.patternInfo.filter(function (
                    patternInfo
                ) {
                    return patternInfo.patternID == action.payload[3];
                });

                // 配列のタスクと抽出したパターン情報を整形して返す。
                return {
                    order: taskPattern[0].order,
                    detail1: task.detail1,
                    detail2: task.detail2,
                    flug: false,
                };
            });

            // stateのMonthの連想配列に新しい日付の連想配列を追加する。
            // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報
            state.userTaskInfo.calendar[action.payload[0]][
                action.payload[1]
            ] = {
                ...state.userTaskInfo.calendar[action.payload[0]][action.payload[1]],
                [action.payload[2]]: {
                    PatternId: action.payload[3],
                    tasks: TodayTasks,
                },
            };

            // action.payload[3];
            console.log(
                state.userTaskInfo.calendar[action.payload[0]][
                    action.payload[1]
                ][action.payload[2]]
            );
        },
    },
});

export const {
    init,
    Register,
    allDelete,
    taskCheckComplete,
    calendarPatternRegster,
} = tasksModule.actions;

export default tasksModule;
