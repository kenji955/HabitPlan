import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";
import { taskDetailRegister } from "../../modules/tasksModule";

interface props {
    label: string;
    required: boolean;
    index:string;
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
    const onChangeHandler = (event: any) => {
        console.log(event.target.value);
        // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
        dispatch(taskDetailRegister([event.target.value,props.label,props.index]));
    };

    // const check = userTaskInfo.tasks[parseInt(props.index)].detail;
    const check = userTaskInfo.tasks[parseInt(props.index)].detail[props.label]
    console.log('inputNormal check '+props.label);
    console.log(check);

    if (props.required) {
        return (
            // <form className={classes.root} noValidate autoComplete="off">
            <TextField
                required
                id="standard-basic"
                label={props.label}
                onChange={onChangeHandler}
                value={userTaskInfo.tasks[parseInt(props.index)].detail[props.label]}
            />
            // </form>
        );
    }
    return (
        // <form className={classes.root} noValidate autoComplete="off">
        <TextField
            id="standard-basic"
            label={props.label}
            onChange={onChangeHandler}
            value={userTaskInfo.tasks[parseInt(props.index)].detail[props.label]}
        />
        // </form>
    );
}
