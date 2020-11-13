import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { taskDelete } from '../../modules/tasksModule';

type Props = { openMenu: number, setOpenMune: React.Dispatch<React.SetStateAction<number>>, anchorEl: HTMLElement, deleteTaskHandler: (index: number) => () => void, index: number };

export default function SimpleMenu(props: Props) {
  const dispatch = useDispatch();
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = () => {
    dispatch(taskDelete(props.index));
    handleClose();
    console.log('delete check click');
  };

  const handleClose = () => {
    // props.deleteTaskHandler(props.index);
    props.setOpenMune(9999);
    console.log('delete check close');
    console.log(props.index);
  };
  console.log('delete check render');
  console.log(props.index);

  return (
    <div>
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
        <MenuItem onClick={handleClick}>タスクを削除する</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
