import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import TaskList from "../components/view/TaskList";
import ResponsiveDrawer from "../components/view/ResponsiveDrawer";
// import Tooltip from '../components/view/toolTips';

import ListComponent from "../components/test/firebaseTest/getData";
import FormComponent from "../components/test/firebaseTest/FormComponent";
import FirebaseAuthComponent from "../components/test/firebaseTest/FirebaseAuthComponent";

// import { firebaseApp } from 'firebase/app';
// const firebaseDb = firebaseApp.database();

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
// const ref = firebaseDb.ref("/mail");
// const data = {
//     user: {
//         one: "Alice",
//         two: "Bob"
//     },
//     message: {
//         title: "Hello"
//     }
// };
// ref.push(data);

const Tasks = () => {
    const classes = useStyles();

    return (
        <Container>
            {/* // <Box> */}
            {/* <Box component="span" m={1} className={classes.button}> */}
            <ResponsiveDrawer />
            {/* <DenseAppBar /> */}
            <Container className={classes.taskList}>
                <TaskList />
            </Container>
            {/* <Tooltip /> */}
            {/* <Tooltips onClick={}/> */}
            {/* <BottomNavigation /> */}
            {/* </Box> */}
            {/* </Box> */}
            <Container className={classes.taskList}>
                <FirebaseAuthComponent />
                {/* <ListComponent /> */}
                <FormComponent />
            </Container>
        </Container>
    );
};

export default Tasks;
