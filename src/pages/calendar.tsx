
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ResponsiveDrawer from '../components/view/ResponsiveDrawer';
import SimpleSelect from "../components/view/Select";
import Calendar3 from "../components/test/Calendar3";
import React from "react";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles(
            {
                button: {
                    backgroundColor: "green",
                },
                patternList: {
                    // display: 'flex',
                    paddingTop: '90px',
                    paddingLeft: '0px',
                    [theme.breakpoints.up('sm')]: {
                        paddingLeft: '240px',
                    }
                },
            }
        )
        
);

const Calendar = () => {
    const classes = useStyles();
    const [choice, setChoice] = React.useState(Number);

    return (
        <Container>
            {/* // <Box> */}
            {/* <Box component="span" m={1} className={classes.button}> */}
            <ResponsiveDrawer />
            {/* <DenseAppBar /> */}
            <Container className={classes.patternList}>
                {/* <FloatingActionButton /> */}
                <SimpleSelect choice={choice} setChoice={setChoice}/>
                <Calendar3 choice={choice} />
            </Container>
            {/* <BottomNavigation /> */}
            {/* </Box> */}
            {/* </Box> */}
        </Container>

    );
};

export default Calendar;
