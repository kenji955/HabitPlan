import { useDatabase } from "../components/test/firebaseTest/DBFetch";
import { userInfo, Actions } from "./userTasksType";


export const reducer = (state: number, action: Actions): number => {
    switch (action.type) {
        case "ADD_TODO":
            console.log('reducer ADD_TODO');
            return (
                state + 1
            )
        case "TOGGLE_TODO":
            console.log('reducer ADD_TODO');
        default:
            return state;
    }
};