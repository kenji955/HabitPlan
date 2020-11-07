import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { taskDelete } from '../../modules/tasksModule';

export default function SimpleMenu(props:{anchorEl: HTMLElement,setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>>,deleteTaskHandler: (index: number) => () => void,index: number}) {
  const dispatch = useDispatch();
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // props.deleteTaskHandler(props.index);
    dispatch(taskDelete(props.index));
    props.setAnchorEl(null);
    console.log('delete check');
  };

  return (
    <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>タスクを削除する</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
