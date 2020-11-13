import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from 'react-redux';
import { taskDelete } from '../../modules/tasksModule';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

type Props = { openMenu: number, setOpenMune: React.Dispatch<React.SetStateAction<number>>, anchorEl: HTMLElement, Handler: any, index: number };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    pattern: {
      width: 'fit-content',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      margin: theme.spacing(2),
    }
  })
);

export default function PatternMenu(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [patternName, setPatternName] = React.useState<string>('');

  const handleClick = () => {
    // dispatch(taskDelete(props.index));
    props.Handler(patternName);
    setPatternName('');
    handleClose();
  };

  const onChangeHandler = (event: any) => {
    setPatternName(event.target.value);
  };

  const handleClose = () => {
    // props.deleteTaskHandler(props.index);
    props.setOpenMune(9999);
  };



  let patternEditMenu =
    <div><TextField
      id="patternEditMenu"
      label={'パターン名'}
      onChange={onChangeHandler}
      value={patternName}
    />
      <IconButton
        edge="end"
        aria-label="patternAdd"
        onClick={handleClick}
      >
        <SendIcon />
      </IconButton>
    </div>;


  return (
    <div className={classes.pattern}>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        keepMounted
        // open={Boolean(props.anchorEl)}
        open={props.index == props.openMenu}
        onClose={handleClose}
      >
        {patternEditMenu}
        {/* <TextField
          id="standard-basic"
          label={'パターン名'}
          onChange={onChangeHandler}
          value={patternName}
        />
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={handleClick}
        >
          <SendIcon />
        </IconButton> */}

        {/* <MenuItem onClick={handleClick}>タスクを削除する</MenuItem> */}
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
