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
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Divider from "@material-ui/core/Divider";

import TaskModal from "./TaskModal";
import TaskPlus from "./taskPlus";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        roots: {
            width: "100%",
            maxWidth: 720,
            margin: "auto",
            backgroundColor: theme.palette.background.paper,
        },
        icon: {
            display: "flex",
            margin: "10px auto 5px auto",
        },
    })
);

export default function CheckboxList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(9999);
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);

    const handleToggle = (value: number) => () => {
        setOpen(value);
        console.log("open:" + open);
    };
    return (
        <List className={classes.roots}>
            {userTaskInfo.tasks.map((task, index) => {
                const labelId = `checkbox-list-label-${task.detail["testDetail1"]}`;

                return (
                    <div>
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
                        <Divider />
                    </div>
                );
            })}
            <TaskPlus num={userTaskInfo.tasks.length+1}/>
        </List>
    );
}
