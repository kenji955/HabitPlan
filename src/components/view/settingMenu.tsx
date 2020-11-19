import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import { signOut } from "../test/firebaseTest/FirebaseAuthComponent";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

export default function settingMenu(props: {
    anchorEl: HTMLElement;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>>;
}) {
    const dispatch = useDispatch();

    const handleClose = () => {
        console.log("check");
        props.setAnchorEl(null);
        signOut(dispatch);
    };

    return (
        <StyledMenu
            id="customized-menu"
            anchorEl={props.anchorEl}
            // keepMounted
            open={Boolean(props.anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="ログアウト" />
            </MenuItem>
        </StyledMenu>
    );
}
