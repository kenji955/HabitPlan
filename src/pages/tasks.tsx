import { useState } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import FloatingActionButtonZoom from "../components/view/FloatingActionButton";
import BottomNavigation from '../components/view/BottomNavigation';
import DenseAppBar from '../components/view/DenseAppBar';
import CheckboxList from '../components/view/CheckBoxList';
import ResponsiveDrawer from '../components/view/ResponsiveDrawer';

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles(
            {
                button: {
                    backgroundColor: "green",
                },
                root: {
                    display: 'flex',
                    paddingTop: '90px',
                    paddingLeft: '0px',
                    [theme.breakpoints.up('sm')]: {
                        paddingLeft: '240px',
                    }
                },
            }
        )
);

const Tasks = () => {
    const classes = useStyles();

    return (
        <Container>
            {/* // <Box> */}
            {/* <Box component="span" m={1} className={classes.button}> */}
            <ResponsiveDrawer />
            {/* <DenseAppBar /> */}
            <Container className={classes.root}>
                <CheckboxList />
            </Container>
            {/* <BottomNavigation /> */}
            {/* </Box> */}
            {/* </Box> */}
        </Container>

    );
};

export default Tasks;
