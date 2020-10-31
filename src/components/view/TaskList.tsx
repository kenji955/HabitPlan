import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Fade from "@material-ui/core/Fade";
import CommentIcon from "@material-ui/icons/Comment";

import TaskModal from "./TaskModal";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootss: {
            width: "100%",
            maxWidth: 720,
            margin: "auto",
            backgroundColor: theme.palette.background.paper,
        },
    })
);

export default function CheckboxList() {
    const classes = useStyles();
    // const [checked, setChecked] = React.useState([0]);
    const [open, setOpen] = React.useState(9999);
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);

    const handleToggle = (value: number) => () => {
        // const currentIndex = checked.indexOf(value);
        // const newChecked = [...checked];

        // if (currentIndex === -1) {
        //     newChecked.push(value);
        // } else {
        //     newChecked.splice(currentIndex, 1);
        // }

        setOpen(value);
        console.log("open:" + open);
        // setChecked(newChecked);
    };

    return (
        <List className={classes.rootss}>
            {/* {[0, 1, 2, 3].map((value) => { */}
            {userTaskInfo.tasks.map((task, index) => {
                const labelId = `checkbox-list-label-${task.detail["testDetail1"]}`;

                return (
                    <ListItem
                        key={
                            task.patternInfo[0].order +
                            ":" +
                            task.patternInfo[0].patternID
                        }
                        role={undefined}
                        dense
                        button
                        onClick={handleToggle(index)}
                    >
                        <ListItemText
                            id={labelId}
                            primary={`Line item ${index + 1} ${
                                task.detail["testDetail1"]
                            } ${task.detail["testDetail2"]}`}
                        />
                        <ListItemSecondaryAction>
                            <TaskModal
                                open={open}
                                setOpen={setOpen}
                                task={task}
                                index={index}
                            />
                            <IconButton edge="end" aria-label="comments">
                                {/* <IconButton aria-label="comments"> */}
                                <CommentIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}
