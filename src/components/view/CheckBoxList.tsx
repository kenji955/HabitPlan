import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../modules/rootReducer";
import { taskCheckComplete } from "../../modules/tasksModule";
import { calendar } from '../../modules/userTasksType';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    roots: {
      width: '100%',
      maxWidth: 720,
      margin:'auto',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function CheckboxList() {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const year= new Date("Thu, 22 May 2020 02:00:00").getFullYear();
  const month= new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1;
  const date= new Date("Thu, 22 May 2020 02:00:00").getDate();

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    dispatch(taskCheckComplete([year,month,date,value]));
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
  
  console.log(test[year][month][22]);
  
  // let Achievement:[JSX.Element],NotAchieved:[JSX.Element];
    const Achievement = test[year][month][22].tasks.filter(function(value){
      return value.flug == true;
    });
    console.log('Achievement');
    console.log(Achievement);

    const NotAchieved = test[year][month][22].tasks.filter(function(value){
      return value.flug == false;
    });
    console.log('NotAchieved');
    console.log(NotAchieved);

  return (
    <List className={classes.roots}>
      {NotAchieved.map((value,index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={year&month&date&index} role={undefined} dense button onClick={handleToggle(index)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.flug}
                // checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${index + 1} ${value.detail1} & ${value.detail2} & ${value.flug}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      <p>達成済み</p>
      {Achievement.map((value,index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={year&month&date&index} role={undefined} dense button onClick={handleToggle(index)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.flug}
                // checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${index + 1} ${value.detail1} & ${value.detail2} & ${value.flug}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      {/* {test[year][month][22].tasks.map((value,index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={year&month&date&index} role={undefined} dense button onClick={handleToggle(index)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.flug}
                // checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${index + 1} ${value.detail1} & ${value.detail2} & ${value.flug}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })} */}
    </List>
    // <List className={classes.roots}>
    //   {[0, 1, 2, 3].map((value) => {
    //     const labelId = `checkbox-list-label-${value}`;

    //     return (
    //       <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
    //         <ListItemIcon>
    //           <Checkbox
    //             edge="start"
    //             checked={checked.indexOf(value) !== -1}
    //             tabIndex={-1}
    //             disableRipple
    //             inputProps={{ 'aria-labelledby': labelId }}
    //           />
    //         </ListItemIcon>
    //         <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
    //         <ListItemSecondaryAction>
    //           <IconButton edge="end" aria-label="comments">
    //           {/* <IconButton aria-label="comments"> */}
    //             <CommentIcon />
    //           </IconButton>
    //         </ListItemSecondaryAction>
    //       </ListItem>
    //     );
    //   })}
    // </List>
  );
}
