import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { subSeconds } from "date-fns";
import firebase from "firebase";
import { auth } from "../components/test/firebaseTest/firebaseTest";
import {
    calendar,
    pattern,
    tasks,
    userInfo,
    userTaskInfo,
} from "./userTasksType";

type State = {
    [key: string]: string;
};

const initialState: userInfo = {
    userId: '',
    userTaskInfo: {
        calendar: {
            [new Date("Thu, 22 Oct 2020 02:00:00").getFullYear()]: {
                [new Date("Thu, 22 Oct 2020 02:00:00").getMonth() + 1]: {
                    [new Date("Thu, 22 Oct 2020 02:00:00").getDate()]: {
                        PatternId: 1,
                        tasks: [
                            {
                                order: 1,
                                detail: {
                                    ["タスク名"]: "タスク名 22 1",
                                    ["testDetail1"]: "testDetail1 22 1",
                                    ["testDetail2"]: "testDetail1 22 1",
                                },
                                flug: false,
                            },
                            {
                                order: 2,
                                detail: {
                                    ["タスク名"]: "タスク名 22 2",
                                    ["testDetail1"]: "testDetail1 22 2",
                                    ["testDetail2"]: "testDetail1 22 2",
                                },
                                flug: false,
                            },
                        ],
                    },
                    [new Date("Thu, 23 Oct 2020 02:00:00").getDate()]: {
                        PatternId: 1,
                        tasks: [
                            {
                                order: 1,
                                detail: {
                                    ["タスク名"]: "タスク名 23 1",
                                    ["testDetail1"]: "testDetail1 23 1",
                                    ["testDetail2"]: "testDetail1 23 1",
                                },
                                flug: false,
                            },
                            {
                                order: 2,
                                detail: {
                                    ["タスク名"]: "タスク名 23 2",
                                    ["testDetail1"]: "testDetail1 23 2",
                                    ["testDetail2"]: "testDetail1 23 2",
                                },
                                flug: false,
                            },
                        ],
                    },
                },
            },
        },

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
                detail: {
                    ["タスク名"]: "タスク名 22 1",
                    ["defalut"]: "defalut",
                    ["testDetail1"]: "testDetail1 22 1",
                    ["testDetail2"]: "testDetail1 22 1",
                },
                patternInfo: [
                    {
                        patternID: 1,
                        order: 1,
                    },
                ],
            },
            {
                detail: {
                    ["タスク名"]: "タスク名 22 2",
                    ["defalut"]: "defalut",
                    ["testDetail1"]: "testDetail1 22 2",
                    ["testDetail2"]: "testDetail1 22 2",
                },
                patternInfo: [
                    {
                        patternID: 1,
                        order: 2,
                    },
                ],
            },
            {
                detail: {
                    ["タスク名"]: "タスク名 23 1",
                    ["defalut"]: "defalut",
                    ["testDetail1"]: "testDetail1 23 1",
                    ["testDetail2"]: "testDetail1 23 1",
                },
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
                detail: {
                    ["タスク名"]: "タスク名 23 2",
                    ["defalut"]: "defalut",
                    ["testDetail2"]: "testDetail1 23 2",
                    ["testDetail1"]: "testDetail1 23 2",
                },
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

// const diff = (olds: any[], nexts: any[]) => ({
//     adds: nexts.filter((e) => !olds.includes(e)),
//     subs: olds.filter((e) => !nexts.includes(e)),
// });

// パターン更新時に未来に設定されているパターンの内容を更新する。
// 更新対象はstate.calendar.tasks
// 年月日が未来であり、かつ、パターンIDが同じものを対象に新しいパターンを登録する。
const futurePatternUpdate = (state: userInfo, updatePatternId: number) => {
    console.log("====futurePatternUpdateここから====");

    console.log(Object.keys(state.userTaskInfo.calendar));
    const today = new Date();
    const nowYear = today.getFullYear();
    const nowMonth = today.getMonth() + 1;
    const nowDate = today.getDate();

    const choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
        return task.patternInfo.some(
            (task) => task.patternID == updatePatternId
        );
    });

    // パターンIDに紐付くタスク一覧からカレンダーへの登録情報を抽出する。
    const updateTasks = choicePatternTasks.map((task) => {
        // パターンが複数登録されているタスクへの対応として、選択されているパターンIDに該当する要素だけを抽出する。
        const taskPattern = task.patternInfo.filter(function (patternInfo) {
            return patternInfo.patternID == updatePatternId;
        });

        // 配列のタスクと抽出したパターン情報を整形して返す。
        return {
            order: taskPattern[0].order,
            detail: task.detail,
            // detail2: task.detail2,
            flug: false,
        };
    });

    const keyMonthList = (keyYear: string) => {
        return Object.keys(state.userTaskInfo.calendar[parseInt(keyYear)]);
    };
    const keyDateList = (keyYear: string, keyMonth: string) => {
        return Object.keys(
            state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)]
        );
    };

    const dateTaskUpdate = (
        keyYear: string,
        keyMonth: string,
        keyDate: string
    ) => {
        if (
            state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][
                parseInt(keyDate)
            ].PatternId == updatePatternId
        ) {
            state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][
                parseInt(keyDate)
            ].tasks = updateTasks;
            console.log("===dateTaskUpdate===");
            console.log(keyYear);
            console.log(keyMonth);
            console.log(keyDate);
            console.log(updateTasks);
        }
    };

    type calendarPattern = {
        order: number;
        detail: {
            [content: string]: string;
        };
        flug: boolean;
    };

    const diff = (olds: calendarPattern[], nexts: calendarPattern[]) => ({
        adds: nexts.filter((e) => !olds.includes(e)),
        subs: olds.filter((e) => !nexts.includes(e)),
    });

    // 登録されている年の連想配列のキーを全て取得
    const keyYears = Object.keys(state.userTaskInfo.calendar);
    keyYears.map((keyYear) => {
        if (parseInt(keyYear) == nowYear) {
            // もし今年だったら、の処理
            // 登録されている月の連想配列のキーを全て取得
            const keyMonths = keyMonthList(keyYear);

            keyMonths.map((keyMonth) => {
                if (parseInt(keyMonth) == nowMonth) {
                    // もし今月だったら
                    // 登録されている日の連想配列のキーを全て取得
                    const keyDates = keyDateList(keyYear, keyMonth);
                    keyDates.map((keyDate) => {
                        if (parseInt(keyDate) > nowDate) {
                            // もし明日以降だったら登録内容を更新する
                            dateTaskUpdate(keyYear, keyMonth, keyDate);
                        } else if (parseInt(keyDate) == nowDate) {
                            // もし今日だったら、変更分だけ反映する。
                            // 処理未作成
                            if (
                                state.userTaskInfo.calendar[parseInt(keyYear)][
                                    parseInt(keyMonth)
                                ][parseInt(keyDate)].PatternId ==
                                updatePatternId
                            ) {
                                const result = diff(
                                    state.userTaskInfo.calendar[
                                        parseInt(keyYear)
                                    ][parseInt(keyMonth)][parseInt(keyDate)]
                                        .tasks,
                                    updateTasks
                                );
                                const updateArray = state.userTaskInfo.calendar[
                                    parseInt(keyYear)
                                ][parseInt(keyMonth)][
                                    parseInt(keyDate)
                                ].tasks.filter(function (task) {
                                    return result.subs.some(
                                        (sub) => sub != task
                                    );
                                });

                                result.adds.map((add) => {
                                    updateArray.push(add);
                                });
                                state.userTaskInfo.calendar[parseInt(keyYear)][
                                    parseInt(keyMonth)
                                ][parseInt(keyDate)].tasks = updateArray;
                            }
                        }
                    });
                } else if (parseInt(keyMonth) > nowMonth) {
                    // もし来月以降だったら、すべて更新する。
                    const keyDates = keyDateList(keyYear, keyMonth);
                    keyDates.map((keyDate) => {
                        dateTaskUpdate(keyYear, keyMonth, keyDate);
                    });
                }
            });
        } else if (parseInt(keyYear) > nowYear) {
            // もし来年以降だったら、の処理。全て更新する。
            const keyMonths = keyMonthList(keyYear);
            keyMonths.map((keyMonth) => {
                const keyDates = keyDateList(keyYear, keyMonth);
                keyDates.map((keyDate) => {
                    dateTaskUpdate(keyYear, keyMonth, keyDate);
                });
            });
        }
    });

    console.log("====futurePatternUpdateここまで====");
};

const DBCRUD = (pass: string, crud: string, updateDocument: any) => {
    const userId = auth.currentUser.uid;
    let refPass = '/' + pass;
    if (pass == '') {
        refPass = ''
    }
    const ref = firebase.database().ref("/users/" + userId + refPass);

    switch (crud) {
        case 'register':
            ref.set(updateDocument)
            break;
        case 'update':
            ref.update(updateDocument)
            break;
        case 'delete':
            ref.remove()
            break;
    }
}

const tasksModule = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        init(state: userInfo, action: PayloadAction<userTaskInfo>) {
            const data = action.payload;
            console.log("init data");
            console.log(data);
            // state = {...data};
            // console.log("init state.userTaskInfo 前");
            // console.log(state.userTaskInfo);
            state.userTaskInfo = data;
            // console.log("init state.userTaskInfo 後");
            // console.log(state.userTaskInfo);
        },
        Register(state: userInfo, action: PayloadAction<userInfo>) {
            const data = action.payload;

            state = { ...state, ...data };
            // console.log('state');
            // console.log(state);
        },
        allDelete(state: userInfo) {
            state = initialState;
            console.log("check allDelete");
        },
        // DayPlanにてタスクをクリックした際に完了フラグをtrueに変更する処理。引数にて年、月、日、タスクのインデックス番号を受け取っている。
        taskCheckComplete(state: userInfo, action: PayloadAction<number[]>) {
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

            DBCRUD(`calendar/${action.payload[0]}/${action.payload[1]}/${action.payload[2]}/tasks/${index}`,
                'update',
                state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index]
            )

        },
        // 引数はstateと年、月、日、選択されているパターンIDの4つの数値が格納された配列
        calendarPatternRegister(
            state: userInfo,
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
                    detail: task.detail,
                    // detail2: task.detail2,
                    flug: false,
                };
            });

            // ここに年がなかった時の処理を加える
            if (action.payload[0] in state.userTaskInfo.calendar) {
                // stateのMonthの連想配列に新しい日付の連想配列を追加する。
                // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報
                state.userTaskInfo.calendar[action.payload[0]][
                    action.payload[1]
                ] = {
                    ...state.userTaskInfo.calendar[action.payload[0]][
                    action.payload[1]
                    ],
                    [action.payload[2]]: {
                        PatternId: action.payload[3],
                        tasks: TodayTasks,
                    },
                };
            } else {
                // stateのMonthの連想配列に新しい日付の連想配列を追加する。
                // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報
                state.userTaskInfo.calendar[action.payload[0]] = {
                    ...state.userTaskInfo.calendar[action.payload[0]],
                    [action.payload[1]]: {
                        [action.payload[2]]: {
                            PatternId: action.payload[3],
                            tasks: TodayTasks,
                        },
                    },
                };
            }
            DBCRUD(`calendar/${action.payload[0]}/${action.payload[1]}/${action.payload[2]}`, 'update', state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);

            console.log(
                state.userTaskInfo.calendar[action.payload[0]][
                action.payload[1]
                ][action.payload[2]]
            );
        },
        // タスクの詳細を設定する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
        taskDetailRegister(state: userInfo, action: PayloadAction<string[]>) {
            state.userTaskInfo.tasks[parseInt(action.payload[2])].detail = {
                ...state.userTaskInfo.tasks[parseInt(action.payload[2])].detail,
                [action.payload[1]]: action.payload[0],
            };
            DBCRUD(`tasks/${[parseInt(action.payload[2])]}/detail`, 'update', state.userTaskInfo.tasks[parseInt(action.payload[2])].detail);
        },
        // タスクを追加する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
        taskRegister(state: userInfo, action: PayloadAction<tasks>) {
            const registerTask = action.payload;
            registerTask.patternInfo.map((content) => {
                const choicePatternTasks = state.userTaskInfo.tasks.filter(
                    function (task) {
                        return task.patternInfo.some(
                            (task) => task.patternID == content.patternID
                        );
                    }
                );
                content.order = choicePatternTasks.length + 1;
            });
            console.log(registerTask);
            state.userTaskInfo.tasks = [...state.userTaskInfo.tasks, registerTask];
            DBCRUD('tasks', 'register', state.userTaskInfo.tasks);
        },
        // タスクのパターン登録状況を更新する。
        taskPatternUpdate(
            state: userInfo,
            action: PayloadAction<{
                newChecked: number[];
                index: number;
            }>
        ) {
            // ここでやることは？
            // まず引数にタスクの配列インデックス番号が必要
            // パターンIDの配列を受け取る。
            // 配列とstateを比較して、なければ登録。Orderは最大値+1。逆に削除されているものは除外。

            const statePatternIdList = state.userTaskInfo.tasks[
                action.payload.index
            ].patternInfo.map((content) => {
                return content.patternID;
            });
            console.log("statePatternIdList");
            console.log(statePatternIdList);
            const diff = (olds: number[], nexts: number[]) => ({
                adds: nexts.filter((e) => !olds.includes(e)),
                subs: olds.filter((e) => !nexts.includes(e)),
            });
            const result = diff(statePatternIdList, action.payload.newChecked);
            let updateArray: {
                patternID: number;
                order: number;
            }[];
            console.log(result);

            // stateから削除対象を除外した配列を抽出する。
            if (result.subs.length > 0) {
                updateArray = state.userTaskInfo.tasks[
                    action.payload.index
                ].patternInfo.filter(function (content) {
                    // futurePatternUpdate(state,);
                    return result.subs.some((sub) => sub != content.patternID);
                });
            } else {
                updateArray =
                    state.userTaskInfo.tasks[action.payload.index].patternInfo;
            }

            console.log("1:updateArray");
            console.log(updateArray);

            //
            result.adds.map((add) => {
                let Max: number = 0;
                // 追加されたIDが設定されているタスクを抽出する。
                const choicePatternTasks = state.userTaskInfo.tasks.filter(
                    function (task) {
                        return task.patternInfo.some(
                            (taskPatternInfo) =>
                                taskPatternInfo.patternID == add
                        );
                    }
                );
                //
                choicePatternTasks.map((task) => {
                    // 抽出された各タスクのパターンIDを比較し、最大値を取得する。
                    let content = task.patternInfo.find(
                        (info) => info.patternID == add
                    );
                    Max < content.order ? (Max = content.order) : "";
                });

                const pushContent = { patternID: add, order: Max + 1 };
                updateArray.push(pushContent);
                futurePatternUpdate(state, add);
            });
            console.log("2:updateArray");
            console.log(updateArray);

            state.userTaskInfo.tasks[
                action.payload.index
            ].patternInfo = updateArray;
            DBCRUD(`tasks/${action.payload.index}/patternInfo`, 'register', updateArray);
        },
        // タスクを削除する処理。引数には削除対象タスクのインデックス番号が格納されている。
        taskDelete(state: userInfo, action: PayloadAction<number>) {
            // const deleteTask = state.userTaskInfo.tasks.splice(
            //     action.payload,
            //     1
            // );
            const deleteTask = state.userTaskInfo.tasks.filter(function (
                content,
                index
            ) {
                return index != action.payload;
            });
            console.log(deleteTask);
            state.userTaskInfo.tasks = deleteTask;
            DBCRUD(`tasks`, 'register', deleteTask);
        },
        // タスクをパターンから除外する処理。引数のオブジェクトにはパターンIDと削除対象タスクの名称が格納されている。
        taskRemovePattern(
            state: userInfo,
            action: PayloadAction<{ patternId: number; detailTitle: string }>
        ) {
            console.log(action.payload.detailTitle);

            const index = state.userTaskInfo.tasks.findIndex((content) => {
                return content.detail["タスク名"] == action.payload.detailTitle;
            });
            console.log(index);
            const deletedTask = state.userTaskInfo.tasks[
                index
            ].patternInfo.filter(function (content) {
                return content.patternID != action.payload.patternId;
            });
            state.userTaskInfo.tasks[index].patternInfo = deletedTask;
            console.log(deletedTask);
            DBCRUD(`tasks/${index}/patternInfo`, 'register', deletedTask);
            // futurePatternUpdate(state);
        },
        // パターンを追加する処理。引数にはパターン名称が格納されている。
        patternRegister(state: userInfo, action: PayloadAction<string>) {
            let MaxId: number = 0;
            state.userTaskInfo.pattern.map((patternContent) => {
                patternContent.patternId > MaxId
                    ? (MaxId = patternContent.patternId)
                    : "";
            });
            const addPattern = {
                patternId: MaxId + 1,
                patternName: action.payload,
            };
            state.userTaskInfo.pattern = [...state.userTaskInfo.pattern, addPattern];
            DBCRUD('pattern', 'register', state.userTaskInfo.pattern);
        },
        // パターンを削除する処理。引数にはパターンIDが格納されている。
        patternDelete(state: userInfo, action: PayloadAction<number>) {
            const updatePatternList = state.userTaskInfo.pattern.filter(
                (patternContent) => {
                    // console.log(patternContent.patternId);
                    // console.log(action.payload);
                    return patternContent.patternId != action.payload;
                }
            );

            console.log(updatePatternList);
            state.userTaskInfo.pattern = updatePatternList;

            // タスクとカレンダーに保管されているパターンを全て削除する必要がある
            // カレンダーは未来分だけ

            // state.userTaskInfo.tasksに保管されているパターン情報を削除する。
            let updateTaskList = state.userTaskInfo.tasks.map((task) => {
                const updatePatternInfo = task.patternInfo.filter(
                    (taskPatternInfo) => {
                        return taskPatternInfo.patternID != action.payload;
                    }
                );
                const updateTask: {
                    detail: {
                        [content: string]: string;
                    };
                    patternInfo: {
                        patternID: number;
                        order: number;
                    }[];
                } = { detail: task.detail, patternInfo: updatePatternInfo };
                return updateTask;
            });
            console.log("after:updateTaskList");
            console.log(updateTaskList);
            state.userTaskInfo.tasks = updateTaskList;

            // state.userTaskInfo.calendarの未来分に保管されているパターン情報を削除する。
            const today = new Date();
            const nowYear = today.getFullYear();
            const nowMonth = today.getMonth() + 1;
            const nowDate = today.getDate();
            const keyYears = Object.keys(state.userTaskInfo.calendar);
            const deleteCalendarDate = (
                year: string,
                month: string,
                date: string
            ) => {
                if (
                    state.userTaskInfo.calendar[parseInt(year)][
                        parseInt(month)
                    ][parseInt(date)].PatternId == action.payload
                ) {
                    delete state.userTaskInfo.calendar[parseInt(year)][
                        parseInt(month)
                    ][parseInt(date)];
                }
            };
            keyYears.map((year) => {
                const keyMonth = Object.keys(
                    state.userTaskInfo.calendar[parseInt(year)]
                );
                if (parseInt(year) > nowYear) {
                    // 対象が来年以降である場合、削除する。deleteのほうがいい
                    keyMonth.map((month) => {
                        const keyDate = Object.keys(
                            state.userTaskInfo.calendar[parseInt(year)][
                            parseInt(month)
                            ]
                        );
                        keyDate.map((date) => {
                            deleteCalendarDate(year, month, date);
                        });
                    });
                } else if (parseInt(year) == nowYear) {
                    // 対象が今年である場合
                    keyMonth.map((month) => {
                        const keyDate = Object.keys(
                            state.userTaskInfo.calendar[parseInt(year)][
                            parseInt(month)
                            ]
                        );
                        if (parseInt(month) > nowMonth) {
                            // 来月以降の場合、削除する。deleteのほうがいい
                            console.log(keyDate);
                            keyDate.map((date) => {
                                deleteCalendarDate(year, month, date);
                            });
                        } else if (parseInt(month) == nowMonth) {
                            // 今月の場合
                            keyDate.map((date) => {
                                if (parseInt(date) > nowDate) {
                                    // 明日以降の場合、削除する
                                    deleteCalendarDate(year, month, date);
                                }
                            });
                        }
                    });
                }
            });
            DBCRUD('', 'register', state.userTaskInfo);
        },
        // パターン名称を編集する処理。引数にはパターンIDとパターン名称が格納されている。
        patternNameEdit(
            state: userInfo,
            action: PayloadAction<{
                editPatternId: number;
                patternName: string;
            }>
        ) {
            // IDに合致する要素のインデックス番号を取得
            const editPatternIndex = state.userTaskInfo.pattern.findIndex(
                (patternContent) =>
                    patternContent.patternId == action.payload.editPatternId
            );
            // 取得したインデックス番号を目印に、引数の新しい名称で更新する。
            state.userTaskInfo.pattern[editPatternIndex].patternName = action.payload.patternName;

            DBCRUD(`pattern/${editPatternIndex}`, 'update', state.userTaskInfo.pattern[editPatternIndex]);

        },
    },
});

export const {
    init,
    Register,
    allDelete,
    taskCheckComplete,
    calendarPatternRegister,
    taskDetailRegister,
    taskRegister,
    taskPatternUpdate,
    taskDelete,
    taskRemovePattern,
    patternRegister,
    patternDelete,
    patternNameEdit,
} = tasksModule.actions;

export default tasksModule;
