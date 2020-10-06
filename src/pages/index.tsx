import React, { useState } from "react";
import ReactDOM from 'react-dom';
// import { Route, Switch, withRouter, Redirect,BrowserRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import FloatingActionButtonZoom from "../components/view/FloatingActionButton";
import BottomNavigation from "../components/view/BottomNavigation";
import DayPlanPC from "./DayPlanPC";
import Tasks from "./tasks";

const useStyles = makeStyles({
    button: {
        backgroundColor: "green",
    },
});

const App = () => {
    const [todos, setTodos] = useState([]);
    const [tmpTodo, setTmpTodo] = useState("");

    const classes = useStyles();

    const addTodo = () => {
        // formの内容が空白の場合はalertを出す
        if (tmpTodo === "") {
            alert("文字を入力してください");
            return;
        }
        setTodos([...todos, tmpTodo]);
        setTmpTodo("");
    };

    // todoを削除する処理
    // const deleteTodo = (index) => {
    //     const newTodos = todos.filter((todo, todoIndex) => {
    //         return index !== todoIndex;
    //     });
    //     setTodos(newTodos);
    // };

    // let routes = (
    //     <Switch>
    //         <Route path="/tasks" component={Tasks} />
    //         <Route path="/" exact component={DayPlanPC} />
    //         <Redirect to="/" />
    //     </Switch>
    // );

    return (
        // <DayPlanPC />
        <Tasks />
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
    );
};

export default App;
// ReactDOM.render( App );
