import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import TaskModal from "./TaskModal";
import TaskPlus from "./taskPlus";
import Menu from "./Menu";
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
        paper: {
            border: "1px solid",
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
    })
);

export default function CheckboxList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(9999);
    const [openMenu, setOpenMune] = React.useState(9999);
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (value: number) => (event: {
        currentTarget: React.SetStateAction<HTMLElement>;
    }) => {
        setAnchorEl(event.currentTarget);
        setOpenMune(value);
        console.log("openMenu:" + openMenu);
    };

    const handleToggle = (value: number) => () => {
        setOpen(value);
        console.log("open:" + open);
    };

    const deleteTaskHandler = () => () => {
        console.log("check deleteTaskHandler");
        // dispatch(taskDelete(index));
    };

    return (
        <List className={classes.roots}>
            {userTaskInfo.tasks.map((task, index) => {
                const labelId = `checkbox-list-label-${task.detail["testDetail1"]}`;

                return (
                        <ListItem
                            key={task.detail["title"] + ":" + index}
                            role={undefined}
                            dense
                            button
                            onClick={handleToggle(index)}
                            divider={true}
                        >
                            <ListItemText
                                id={labelId}
                                primary={<span>{task.detail["タスク名"]}</span>}
                                // disableTypography={false}
                                primaryTypographyProps={{component:'span'}}
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
                                    aria-label="RemoveCircle"
                                    onClick={handleClick(index)}
                                >
                                    <RemoveCircleIcon color="secondary" />
                                </IconButton>
                                <Menu
                                    openMenu={openMenu}
                                    setOpenMune={setOpenMune}
                                    anchorEl={anchorEl}
                                    deleteTaskHandler={deleteTaskHandler}
                                    index={index}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                );
            })}
            <TaskPlus num={userTaskInfo.tasks.length + 1} />
        </List>
    );
}
