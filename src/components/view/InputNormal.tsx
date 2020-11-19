import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";
import { taskDetailRegister } from "../../modules/tasksModule";
import { tasks } from "../../modules/userTasksType";

type newTasksType = {
    [content: string]: string;
};

interface props {
    label: string;
    required: boolean;
    index: string;
    contentIndex: number;
    contents: {
        label: string;
        value: string;
    }[];
    setContents: React.Dispatch<
        React.SetStateAction<
            {
                label: string;
                value: string;
            }[]
        >
    >;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: "25ch",
            },
        },
    })
);

export default function FormPropsTextFields(props: props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
    // const onChangeHandler = (event: any) => {
    //     // console.log(event.target.value);
    //     // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
    //     dispatch(
    //         taskDetailRegister([event.target.value, props.label, props.index])
    //     );
    // };
    // 新規登録か更新かをチェックする。新規であればTrue
    const checkNew = userTaskInfo.tasks.length < parseInt(props.index);
    const onBlurHandler = (event: any) => {
        console.log(props.label + '離れたぞ！！！')
        if (checkNew) {
            console.log(event.target.value);
            const contentsCopy = props.contents.slice();
            contentsCopy[props.contentIndex].value = event.target.value;
            props.setContents(contentsCopy);
        } else {
            console.log(event.target.value);
            dispatch(
                taskDetailRegister([event.target.value, props.label, props.index])
            );
        }
    };
    const newTaskOnChangeHandler = (event: any) => {
        // console.log(event.target.value);
        // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成

        const contentsCopy = props.contents.slice();
        contentsCopy[props.contentIndex].value = event.target.value;

        props.setContents(contentsCopy);
    };

    let valueContent;

    if (checkNew) {
        return (
            // <form className={classes.root} noValidate autoComplete="off">
            <TextField
                required
                id="standard-basic"
                label={props.label}
                // onChange={newTaskOnChangeHandler}
                onBlur={onBlurHandler}
                defaultValue={props.contents[props.contentIndex].value}
            />
            // </form>
        );
    } else if (props.required) {
        return (
            // <form className={classes.root} noValidate autoComplete="off">
            <TextField
                required
                id="standard-basic"
                label={props.label}
                // onChange={onChangeHandler}
                onBlur={onBlurHandler}
                defaultValue={
                    userTaskInfo.tasks[parseInt(props.index)].detail[props.label]
                }
            />
            // </form>
        );
    }
    if (userTaskInfo.tasks[parseInt(props.index)].detail[props.label]) {
        valueContent = userTaskInfo.tasks[parseInt(props.index)].detail[props.label];
    } else {
        valueContent = '';
    }
    return (
        // <form className={classes.root} noValidate autoComplete="off">
        <TextField
            id="standard-basic"
            label={props.label}
            // onChange={onChangeHandler}
            onBlur={onBlurHandler}
            defaultValue={
                valueContent
            }
        // value={
        //     userTaskInfo.tasks[parseInt(props.index)].detail[props.label]
        // }
        />
        // </form>
    );
}
