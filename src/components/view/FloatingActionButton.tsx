import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import PatternList from "./PatternList";
import SimpleSelect from "./Select";
import TaskList from "./TaskList";
import Calendar from "./Calendar";
import Calendar2 from "../test/calendar";
import Calendar3 from "../test/Calendar3";
import Calendar4 from "../test/calendar4.jsx";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        // paddingTop:'70px',
        // display:'inline-block',
        alignItems: "center",
    },
    barSize: {
        width: "fit-content",
        display: "flex",
        margin: "0 auto",
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [choice, setChoice] = React.useState(Number);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                color="default"
                className={classes.barSize}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Tasks" {...a11yProps(0)} />
                    <Tab label="Pattern" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <TaskList />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SimpleSelect choice={choice} setChoice={setChoice} />
                <PatternList choice={choice} />
                {/* <SimpleSelect choice={choice} setChoice={setChoice}/>
                <Calendar3 choice={choice} /> */}
            </TabPanel>
        </div>
    );
}
