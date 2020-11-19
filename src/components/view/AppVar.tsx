import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputN from "./InputNormal";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules/rootReducer';
import { taskDetailRegister } from '../../modules/tasksModule';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'fixed',
      width: '40%',
      zIndex: 5,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar(props: any) {
  const classes = useStyles();
  const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const onChangeHandler = (event: any) => {
    // console.log(event.target.value);
    // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
    dispatch(
      taskDetailRegister([event.target.value, 'タスク名', props.index])
    );
  };

  let button;
  if (props.checkNew) {
    button = <Button color="inherit" onClick={props.handleRegister}>登録</Button>
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            {/* News */}
            {/* <Input placeholder="タスク名" inputProps={{ 'aria-label': 'description' }} onChange={onChangeHandler} value={userTaskInfo.tasks[parseInt(props.index)].detail['title']} /> */}
            {/* <TextField
            id="standard-basic"
            placeholder="タスク名"
            label={props.label}
            onChange={onChangeHandler}
            value={
              userTaskInfo.tasks[parseInt(props.index)].detail['title']
            }
        /> */}
            <InputN
              label={'タスク名'}
              required={false}
              index={props.index}
              contentIndex={props.contents.length-1}
              contents={props.contents}
              setContents={props.setContents}
            />
          </Typography>
          {props.checkNew ? <Button color="inherit" onClick={props.handleRegister}>登録</Button> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
