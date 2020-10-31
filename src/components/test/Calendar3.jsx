import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarPatternRegister } from "../../modules/tasksModule";
import { RootState } from "../../modules/rootReducer";

import format from "date-fns/format";
import getDate from "date-fns/getDate";
import getDay from "date-fns/getDay";
import isSameDay from "date-fns/isSameDay";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import endOfWeek from "date-fns/endOfWeek";
import eachWeekOfInterval from "date-fns/eachWeekOfInterval";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import isSameMonth from "date-fns/isSameMonth";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(5, 10),
        padding: theme.spacing(5, 5),
    },
    yearmonth: {
        margin: theme.spacing(2, 0, 1, 0),
    },
    tableHead: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.light,
    },
}));

const useCalendarCellStyles = makeStyles((theme) => ({
    calendarCell: {
        color: ({ wday, isTargetMonth }) => {
            if (isTargetMonth) {
                switch (wday) {
                    case 0: // Sunday
                        return red[500];
                    case 6: // Saturday
                        return blue[500];
                    default:
                        return theme.palette.text.primary;
                }
            } else {
                // previous or next month
                switch (wday) {
                    case 0: // Sunday
                        return red[200];
                    case 6: // Saturday
                        return blue[200];
                    default:
                        return theme.palette.text.secondary;
                }
            }
        },
        backgroundColor: ({ isToday }) => (isToday ? pink[50] : "transparent"),
    },
}));

const getCalendarArray = (date) => {
    const sundays = eachWeekOfInterval({
        start: startOfMonth(date),
        end: endOfMonth(date),
    });
    return sundays.map((sunday) =>
        eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) })
    );
};

const calendarCellClick = (dateData, dispatch, choice) => () => {
    const year = dateData.getFullYear();
    const month = dateData.getMonth() + 1;
    const date = dateData.getDate();
    dispatch(calendarPatternRegister([year, month, date, choice]));
};

// カレンダー欄に設定されているパターンIDを表示させるための関数
// メモ。2020/10/27時点の課題。dateどころかyear、monthがない可能性もある。
function PatternRegistrationStatus(dateData, userTaskInfo) {
    const year = dateData.getFullYear();
    const month = dateData.getMonth() + 1;
    const date = dateData.getDate();

    // console.log("チェック：" + date + ":" + month + ":" + year);

    // console.log("チェック2");
    // console.log(userTaskInfo.calendar[year]);
    if ([year] in userTaskInfo.calendar) {
        if ([month] in userTaskInfo.calendar[year]) {
            if ([date] in userTaskInfo.calendar[year][month]) {
                console.log("PatternId：" + userTaskInfo.calendar[year][month][date].PatternId);
                return userTaskInfo.calendar[year][month][date].PatternId;
            }
        }
    }
    // console.log("なし：" + date);
    return "×";
}

function CalendarTableCell(props) {
    const {
        key,
        wday,
        isTargetMonth,
        isToday,
        children,
        dateData,
        dispatch,
        choice,
        ...other
    } = props;
    const classes = useCalendarCellStyles(props);
    return (
        <TableCell
            className={classes.calendarCell}
            {...other}
            onClick={calendarCellClick(dateData, dispatch, choice)}
        >
            {children}
        </TableCell>
    );
}

function App(props) {
    const [targetDate, setTargetDate] = useState(new Date());
    const classes = useStyles();
    const calendar = getCalendarArray(targetDate);
    const today = new Date();
    const dispatch = useDispatch();
    const { userTaskInfo } = useSelector((state) => state.tasks);

    return (
        <div>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={() =>
                                setTargetDate(subMonths(targetDate, 1))
                            }
                        >
                            前の月
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={() => setTargetDate(new Date())}
                        >
                            今月
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={() =>
                                setTargetDate(addMonths(targetDate, 1))
                            }
                        >
                            次の月
                        </Button>
                    </Grid>
                </Grid>
                <Typography
                    variant="h4"
                    align="center"
                    className={classes.yearmonth}
                >
                    {format(targetDate, "y年M月")}
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align="center"
                                classes={{ head: classes.tableHead }}
                            >
                                日
                            </TableCell>
                            <TableCell
                                align="center"
                                classes={{ head: classes.tableHead }}
                            >
                                月
                            </TableCell>
                            <TableCell
                                align="center"
                                classes={{ head: classes.tableHead }}
                            >
                                火
                            </TableCell>
                            <TableCell
                                align="center"
                                classes={{ head: classes.tableHead }}
                            >
                                水
                            </TableCell>
                            <TableCell
                                align="center"
                                classes={{ head: classes.tableHead }}
                            >
                                木
                            </TableCell>
                            <TableCell
                                align="center"
                                classes={{ head: classes.tableHead }}
                            >
                                金
                            </TableCell>
                            <TableCell
                                align="center"
                                onClick={calendarCellClick}
                                classes={{ head: classes.tableHead }}
                            >
                                土
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {calendar.map((weekRow, rowNum) => (
                            <TableRow key={rowNum}>
                                {weekRow.map((date) => (
                                    <CalendarTableCell
                                        key={getDay(date)}
                                        wday={getDay(date)}
                                        isTargetMonth={isSameMonth(
                                            date,
                                            targetDate
                                        )}
                                        isToday={isSameDay(date, today)}
                                        dateData={date}
                                        dispatch={dispatch}
                                        choice={props.choice}
                                        align="center"
                                    >
                                        {getDate(date)}
                                        <br></br>
                                        {PatternRegistrationStatus(
                                            date,
                                            userTaskInfo
                                        )}
                                    </CalendarTableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

export default App;
