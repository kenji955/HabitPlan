// export type calendar = {
//     year: number,
//     month: number;
//     date: number;
//     PatternId: number;
//     tasks: {
//         detail1: string;
//         detail2: string;
//         flug: boolean;
//     }[];
// };

export type calendar = {
    [year: number]: {
        [month: number]: {
            [date: number]: {
                PatternId: number;
                tasks: {
                    order: number;
                    detail: { [content: string]: string };
                    // detail2: string;
                    flug: boolean;
                }[];
            };
        };
    };
    // {
    //     [month: number]: {
    //         [date: number]: {
    //             PatternId: number;
    //             tasks: {
    //                 detail1: string;
    //                 detail2: string;
    //                 flug: boolean;
    //             }[];
    //         }[];
    //     }[];
    // }[];
};

export type pattern = {
    patternId: number;
    patternName: string;
};

export type tasks = {
    detail: { [content: string]: string };
    // detail1: string;
    // detail2: string;
    patternInfo: {
        patternID: number;
        order: number;
    }[];
};

export type userInfo = {
    userId: string;
    userTaskInfo: {
        calendar: calendar;
        pattern: pattern[];
        tasks: tasks[];
    };
};

export type userTaskInfo = {
    calendar: calendar;
    pattern: pattern[];
    tasks: tasks[];
};


interface IAddTodoAction {
    type: "ADD_TODO";
    // payload: {  };
}
interface IToggleTodoAction {
    type: "TOGGLE_TODO";
    payload: { id: number };
}
export type Actions =
    | IAddTodoAction
    | IToggleTodoAction


export interface StoreProvider {
    state: userInfo;
    dispatch: React.Dispatch<Actions>;
}