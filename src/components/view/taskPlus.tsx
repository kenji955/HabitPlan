import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TaskModal from "./TaskModal";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            display: "flex",
            margin: "10px auto 5px auto",
        },
    })
);

export default function TaskPlusIcon(props: { num: number }) {
    const classes = useStyles();
    const [newOpen, setNewOpen] = React.useState(9999);
    const taskAddHandler = () => {
        // const currentIndex = checked.indexOf(value);
        // const newChecked = [...checked];

        // if (currentIndex === -1) {
        //     newChecked.push(value);
        // } else {
        //     newChecked.splice(currentIndex, 1);
        // }

        // setOpen(value);
        setNewOpen(props.num);
        console.log("tasktest");
        // setChecked(newChecked);
    };

    return (
        <div>
            <AddCircleIcon className={classes.icon} onClick={taskAddHandler} />
            <TaskModal open={newOpen} setOpen={setNewOpen} index={props.num} />
        </div>
    );
}
