export type calendar = [
    {
        year: number;
        month: number;
        date: number;
        PatternId: number;
        tasks: [
            {
                detail1: string;
                detail2: string;
                flug: boolean;
            }
        ];
    }
];

export type pattern = [
    {
        patternId: number;
        patternName: string;
    }
];

export type tasks = [
    {
        detail1: string;
        detail2: string;
        patternInfo: [
            {
                patternID: number;
                order: number;
            }
        ];
    }
];

export type userTask = {
    userTaskInfo: {
        calendar: calendar;
        pattern: pattern;
        tasks: tasks;
    };
};

export type userTaskInfo = {
    calendar: calendar;
    pattern: pattern;
    tasks: tasks;
};
