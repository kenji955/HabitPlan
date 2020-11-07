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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";
import Divider from "@material-ui/core/Divider";
import { taskRemovePattern } from "../../modules/tasksModule";

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
    const dispatch = useDispatch();
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);

    // マイナスボタンがクリックされたらパターンから対象のタスクを除外する。
    const patternRemoveHandler = (detailTitle:string)=>()=>{
        const patternId =props.choice;
        dispatch(taskRemovePattern({patternId,detailTitle}));
    }

    // 選択したパターンIDが設定されているタスクを抽出する。
    const choicePatternTasks = userTaskInfo.tasks.filter(function (task) {
        return task.patternInfo.some((task) => task.patternID == props.choice);
    });

    return (
        <List className={classes.roots}>
            {choicePatternTasks.map((task,index) => {
                const taskPattern = task.patternInfo.filter(function (
                    patternInfo
                ) {
                    return patternInfo.patternID == props.choice;
                });
                const labelId = `checkbox-list-label-${
                    taskPattern[0].patternID + taskPattern[0].order
                }`;

                return (
                    <div key={
                        taskPattern[0].patternID + '_' + index
                    }>
                        <ListItem
                            key={
                                taskPattern[0].patternID + taskPattern[0].order
                            }
                            role={undefined}
                            dense
                            button
                        >
                            <ListItemIcon>
                                <IconButton edge="end" aria-label="comments" onClick={patternRemoveHandler(task.detail['title'])}>
                                    <RemoveCircleIcon color="secondary" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText
                                id={labelId}
                                primary={`Line item ${
                                    taskPattern[0].patternID +
                                    "_" +
                                    taskPattern[0].order
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
                        <Divider />
                    </div>
                );
            })}
        </List>
    );
}
