import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import styles from 'ScrollableTabsButtonAuto.css'

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
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    AppBarRoot: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    tabsBar:{
        justifyContent:'center',
    },
    tab: {
        // width: theme.spacing(1),
        minWidth: theme.spacing(7),
    }
}));

// export default function ScrollableTabsButtonAuto(props: {
//     dataList: {
//         handleClick: () => void;
//         date: number;
//         day: string;
//     }[]
// }) {
export default function ScrollableTabsButtonAuto(props: {
    today: Date;
    setChoiceDate: React.Dispatch<React.SetStateAction<number[]>>;
}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const displayRange: number = 14;
    const dataList = [];
    const dateT = ["日", "月", "火", "水", "木", "金", "土"];
    const date = props.today;
    date.setDate(props.today.getDate() - displayRange + 1);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleClick = (year: number, month: number, date: number) => () => {
        props.setChoiceDate([year, month, date]);
    };

    for (let index: number = displayRange - 1; index >= 0; index--) {
        const labelText = (<span>{dateT[date.getDay()]}<br></br>{date.getDate()}</span>);
        dataList.push(
            <Tab
                // key={date.getFullYear()+"_"+date.getMonth()+1+"_"+date.getDate()}
                // variant="square"
                onClick={handleClick(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    date.getDate()
                )}
                label={labelText}
                // label={date.getDate()}
                wrapped={true}
                className={classes.tab}
            />
            // </Tab>
            // ここにタブ表示用の情報をまとめたオブジェクトを作成する。
            // {
            //     handleClick: handleClick(date.getFullYear(),date.getMonth() + 1,date.getDate()), date: date.getDate(), day: dateT[date.getDay()]
            // }
        );
        date.setDate(props.today.getDate() + 1);
    }

    return (
        <div className={classes.AppBarRoot}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    className={classes.tabsBar}
                >
                    {dataList.map((data) => {
                        return data
                    })}
                    {/* <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} /> */}
                </Tabs>
            </AppBar>
            {/* <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel> */}

        </div>
    );
}
