import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
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
    })
);

export default function PatternList(props: { choice: number }) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const choicePatternTasks = userTaskInfo.tasks.filter(function (task) {
        return task.patternInfo.some((task) => task.patternID == props.choice);
    });

    console.log("choicePatternTasks:" + choicePatternTasks);

    return (
        <List className={classes.roots}>
            {choicePatternTasks.map((task) => {
                const taskPattern = task.patternInfo.filter(function (
                    patternInfo
                ) {
                    return patternInfo.patternID == props.choice;
                });
                const labelId = `checkbox-list-label-${
                    taskPattern[0].patternID + taskPattern[0].order
                }`;

                return (
                    <ListItem
                        key={taskPattern[0].patternID + taskPattern[0].order}
                        role={undefined}
                        dense
                        button
                        onClick={handleToggle(
                            taskPattern[0].patternID + taskPattern[0].order
                        )}
                    >
                        <ListItemIcon>
                            <IconButton edge="end" aria-label="comments">
                                <RemoveCircleIcon color="secondary" />
                            </IconButton>
                        </ListItemIcon>
                        <ListItemText
                            id={labelId}
                            primary={`Line item ${
                                taskPattern[0].patternID + '_' + taskPattern[0].order
                            } ${task.detail["testDetail1"]} ${
                                task.detail["testDetail2"]
                            }`}
                        />
                        <ListItemSecondaryAction>
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
