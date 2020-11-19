import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import TaskList from "../components/view/TaskList";
import ResponsiveDrawer from "../components/view/ResponsiveDrawer";
import FloatingActionButton from "../components/view//FloatingActionButton";

import ListComponent from "../components/test/firebaseTest/getData";
import FormComponent from "../components/test/firebaseTest/FormComponent";
import FirebaseAuthComponent from "../components/test/firebaseTest/FirebaseAuthComponent";

import withAuth from '../components/shared/withAuth'
import React, { useMemo } from "react";
import { Stores } from "../modules/store";
import { StoreProvider } from "../modules/userTasksType";
import { auth } from "../components/test/firebaseTest/firebaseTest";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            backgroundColor: "green",
        },
        taskList: {
            display: "flex",
            paddingTop: "90px",
            paddingLeft: "0px",
            [theme.breakpoints.up("sm")]: {
                paddingLeft: "240px",
            },
        },
    })
);


const Tasks = () => {
    const classes = useStyles();
    const { state, dispatch }: StoreProvider = React.useContext(Stores);
    console.log(state);
    useMemo(() =>
    dispatch({
        type: "ADD_TODO",
    }), []
    )
    console.log(state);

    console.log('auth.currentUser.uid');
    console.log(auth.currentUser.uid);


    return (
        <Container>
            {/* // <Box> */}
            {/* <Box component="span" m={1} className={classes.button}> */}
            <ResponsiveDrawer />
            {/* <DenseAppBar /> */}
            <Container className={classes.taskList}>
                <FloatingActionButton />
                {/* <TaskList /> */}
            </Container>
            {/* <Tooltip /> */}
            {/* <Tooltips onClick={}/> */}
            {/* <BottomNavigation /> */}
            {/* </Box> */}
            {/* </Box> */}
            <Container className={classes.taskList}>
                <FirebaseAuthComponent />
                <ListComponent />
                <FormComponent />
            </Container>
        </Container>
    );
};

export default withAuth(Tasks);
