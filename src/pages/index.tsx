import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";
import router from "next/router";
// import { Route, Switch, withRouter, Redirect,BrowserRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import FloatingActionButtonZoom from "../components/view/FloatingActionButton";
import BottomNavigation from "../components/view/BottomNavigation";
import DayPlanPC from "./DayPlan";
import Tasks from "./tasks";
import FirebaseAuthComponent from "../components/test/firebaseTest/FirebaseAuthComponent";
import SignIn from '../components/view/SignIn'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules/rootReducer";
import { login } from "../modules/userModule";
import { auth } from "../components/test/firebaseTest/firebaseTest";
import { useFetchAllData } from "../components/test/firebaseTest/DBFetch";
import { init } from "../modules/tasksModule";

// ここでReduxのログイン処理を行う

const App = () => {
    const dispatch = useDispatch();
    const { userId } = useSelector((state: RootState) => state.user);
    // const { data } = useMemo(() => useFetchAllData(), [userId]);
    const { data } = useFetchAllData();
    
    let RenderComponent: JSX.Element = <SignIn />;
    
    auth.onAuthStateChanged((authUser) => {
        if (authUser) {
            // this.setState({
            //   status: "SIGNED_IN"
            // });
            RenderComponent = <DayPlanPC />;
            console.log('check 1');
            console.log(authUser.uid);
            if(!!authUser.uid){
                dispatch(login(authUser.uid));
                console.log(userId);
                console.log("index data");
                console.log(data);
                // setUT(useSelector((state: RootState) => state.tasks));
                if (!!data) {
                    dispatch(init(data));
                }
                router.push("/DayPlan");
                return RenderComponent;
            }
        } else {
            // RenderComponent = <FirebaseAuthComponent />;
            RenderComponent = <SignIn />;
            console.log('check 2');
            return RenderComponent;
        }
    });

    // useMemo(() => {
    //     if (userId == "") {
    //         RenderComponent = <FirebaseAuthComponent />;
    //     } else {
    //         RenderComponent = <DayPlanPC />;
    //     }
    // }, [userId]);

    return RenderComponent;
    // <DayPlanPC />
    // <Tasks />
    // <BrowserRouter>{routes}</BrowserRouter>
    // <Container fixed>
    //     <h1>Todo App</h1>
    //     <Box component="span" m={1} className={classes.button}>
    //         {/* <Button variant="contained" color="primary">
    //                 Test
    //             </Button> */}
    //         <FloatingActionButtonZoom />
    //         <BottomNavigation />
    //     </Box>
    //     {/* <Box>
    //     </Box> */}
    // </Container>
};

export default App;
// ReactDOM.render( App );
