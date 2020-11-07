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
import Popper from "@material-ui/core/Popper";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import TaskModal from "./TaskModal";
import TaskPlus from "./taskPlus";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { taskDelete } from "../../modules/tasksModule";
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
        paper: {
            border: "1px solid",
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
    })
);

export default function CheckboxList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(9999);
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
      };

    const handleToggle = (value: number) => () => {
        setOpen(value);
        console.log("open:" + open);
    };

    const deleteTaskHandler = (index: number) => () => {
        console.log('check deleteTaskHandler');
        // dispatch(taskDelete(index));
    };

    return (
        <List className={classes.roots}>
            {userTaskInfo.tasks.map((task, index) => {
                const labelId = `checkbox-list-label-${task.detail["testDetail1"]}`;

                return (
                    <div key={labelId + "_" + index}>
                        <ListItem
                            key={task.detail["title"] + ":" + index}
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
                                    <CommentIcon />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="comments"
                                    onClick={handleClick}
                                    // onClick={deleteTaskHandler(index)}
                                >
                                    <RemoveCircleIcon color="secondary" />
                                </IconButton>
                                <Menu anchorEl={anchorEl} setAnchorEl={setAnchorEl}　deleteTaskHandler={deleteTaskHandler} index={index}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </div>
                );
            })}
            <TaskPlus num={userTaskInfo.tasks.length + 1} />
        </List>
    );
}
