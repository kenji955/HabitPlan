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
import DateList from '../components/view/DateList';
import ScrollableTabsButtonAuto from '../components/view/ScrollableTabsButtonAuto';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import withAuth from '../components/shared/withAuth'

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles(
            {
                button: {
                    backgroundColor: "green",
                },
                checkboxList: {
                    display: 'flex',
                    paddingTop: '30px',
                    paddingLeft: '0px',
                    [theme.breakpoints.up('sm')]: {
                        paddingLeft: '240px',
                    }
                },
                date: {
                    display: 'flex',
                    paddingTop: '90px',
                    paddingLeft: '0px',
                    justifyContent:'center',
                    [theme.breakpoints.up('sm')]: {
                        width:theme.spacing(131),
                        paddingLeft: '240px',
                    }
                },
            }
        )
        
);
// memo
// DateListには当日分のDate型を渡す。渡した先で繰り返し分を作成し、14日前(getDate()-ｘ)まで計算する。作成時に年、月、日を引数に保管する。クリック時にstateに保管する。
// CheckboxListには文字列配列を渡す。[年、月、日]。stateで管理しているもの。これを基に表示内容を決定する。万が一に備え、未登録時はエラーにならないようにする。
const DayPlan = () => {
    const classes = useStyles();
    const today = new Date();
    const [choiceDate, setChoiceDate] = useState<number[]>([today.getFullYear(),today.getMonth()+1,today.getDate()]);
    console.log('today');
    console.log(today);

    return (
        <Container>
            {/* // <Box> */}
            {/* <Box component="span" m={1} className={classes.button}> */}
            <ResponsiveDrawer />
            {/* <DenseAppBar /> */}
            <Container className={classes.date}>
                {/* <CheckBoxOutlineBlankIcon />test
                <br></br>
                <CheckBoxOutlineBlankIcon /> */}
                {/* <DateList today={today} setChoiceDate={setChoiceDate} /> */}
                <ScrollableTabsButtonAuto today={today} setChoiceDate={setChoiceDate} />
            </Container>
            <Container className={classes.checkboxList}>
                <CheckboxList choiceDate={choiceDate}/>
            </Container>
            {/* <BottomNavigation /> */}
            {/* </Box> */}
            {/* </Box> */}
        </Container>

    );
};

export default withAuth(DayPlan,'DayPlan');
