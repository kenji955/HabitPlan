import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import FloatingActionButtonZoom from "../components/view/FloatingActionButton";
import BottomNavigation from '../components/view/BottomNavigation';
import DenseAppBar from '../components/view/DenseAppBar';
import CheckboxList from '../components/view/CheckBoxList';
import ResponsiveDrawer from '../components/view/ResponsiveDrawer';

const useStyles = makeStyles({
    button: {
        backgroundColor: "green",
    },
});

const DayPlanPC = () => {
    const classes = useStyles();

    return (
        <Container>
            {/* // <Box> */}
            <h1>Todo App</h1>
            {/* <Box component="span" m={1} className={classes.button}> */}
            <ResponsiveDrawer />
            {/* <DenseAppBar /> */}
            <Container>
                <CheckboxList />
            </Container>
            {/* <BottomNavigation /> */}
            {/* </Box> */}
            {/* </Box> */}
        </Container>

    );
};

export default DayPlanPC;
