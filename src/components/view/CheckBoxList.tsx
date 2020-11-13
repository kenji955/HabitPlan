import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";
import { taskCheckComplete } from "../../modules/tasksModule";
import { calendar } from "../../modules/userTasksType";
import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        roots: {
            width: "100%",
            maxWidth: 720,
            margin: "auto",
            backgroundColor: theme.palette.background.paper,
        },
        AchievementList: {
            display: "inline-block",
            width: "100%",
        },
    })
);

export default function CheckboxList(props: { choiceDate: number[] }) {
    const classes = useStyles();
    const [checked, setChecked] = useState([]);
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();
    // const year = new Date("Thu, 22 May 2020 02:00:00").getFullYear();
    // const month = new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1;
    // const date = new Date("Thu, 22 May 2020 02:00:00").getDate();
    const year = props.choiceDate[0];
    const month = props.choiceDate[1];
    const date = props.choiceDate[2];

    const handleToggle = (order: number) => () => {
        const currentIndex = checked.indexOf(order);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(order);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        console.log("list" + order);

        dispatch(taskCheckComplete([year, month, date, order]));
    };

    // ここで作成する機能はたくさんある。
    // 日付とパターンIDを読み取ること
    // いや、ここじゃないか？ここではカレンダーに格納されたタスクを読み取るだけで良いのでは？
    // カレンダー画面でパターンを登録し、その時にタスクリストからパターンIDが合致するものだけ抽出して、該当する日付のカレンダー配列に格納する
    // 一度シンプルに、カレンダー配列に格納されているタスクを読み取る機能を実装しよう

    // const test = userTaskInfo.calendar.filter(function(value){
    //   return value.year == year && value.month == month && value.date == date
    // });

    // const test = userTaskInfo.calendar[year][month][date]
    const test = userTaskInfo.calendar;

    // console.log(test[year][month][22]);

    if (year in userTaskInfo.calendar) {
        if (month in userTaskInfo.calendar[year]) {
            if (date in userTaskInfo.calendar[year][month]) {
                // console.log("PatternId：" + userTaskInfo.calendar[year][month][date].PatternId);
                // return userTaskInfo.calendar[year][month][date].PatternId;
                // let Achievement:[JSX.Element],NotAchieved:[JSX.Element];
                // 達成済みリスト
                const Achievement = test[year][month][date].tasks.filter(
                    function (value) {
                        return value.flug == true;
                    }
                );
                console.log("Achievement");
                console.log(Achievement);

                // 未達成リスト
                const NotAchieved = test[year][month][date].tasks.filter(
                    function (value) {
                        return value.flug == false;
                    }
                );
                console.log("NotAchieved");
                console.log(NotAchieved);

                return (
                    <List className={classes.roots} key={'checkBoxList'}>
                        {NotAchieved.map((value, index) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={index + '_' + year + '/' + month + '/' + date + '_' + value.order}
                                    role={undefined}
                                    dense
                                    button
                                    onClick={handleToggle(value.order)}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={value.flug}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{
                                                "aria-labelledby": labelId,
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        id={labelId}
                                        primary={`${value.detail["タスク名"]}`}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            edge="end"
                                            aria-label="comments"
                                        >
                                            <CommentIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            );
                        })}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>達成済み</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className={classes.AchievementList}
                            >
                                {Achievement.map((value, index) => {
                                    const labelId = `checkbox-list-label-${value}`;

                                    return (
                                        <ListItem
                                            key={index + '_' + year + '/' + month + '/' + date + '_' + value.order}
                                            role={undefined}
                                            dense
                                            button
                                            onClick={handleToggle(value.order)}
                                        >
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={value.flug}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{
                                                        "aria-labelledby": labelId,
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                id={labelId}
                                                primary={`Line item ${index + 1
                                                    } ${value.detail["testDetail1"]
                                                    } & ${value.detail["testDetail2"]
                                                    } & ${value.flug}`}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    edge="end"
                                                    aria-label="comments"
                                                >
                                                    <CommentIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    );
                                })}
                            </AccordionDetails>
                        </Accordion>
                    </List>
                );
            }
        }
    }
    // console.log("なし：" + date);
    return (
        <List className={classes.roots}>
            <ListItem key={year + '/' + month + '/' + date} role={undefined} dense button>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                    id={"0"}
                    primary={`タスクが登録されておりません。${year} / ${month} / ${date}`}
                />
            </ListItem>
        </List >
    );
}
