import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        square: {
            // color: theme.palette.getContrastText(deepOrange[500]),
            // backgroundColor: deepOrange[500],
            display: 'inline-flex',
            margin:'0 3px',
            textAlign:'center',
            // width:'100px',
        },
        rounded: {
            color: '#fff',
            backgroundColor: green[500],
        },
    }),
)

// export default function DateList(props: { choice: number, setChoice: React.Dispatch<React.SetStateAction<number>> }) {
export default function DateList(props: { today: Date, setChoiceDate: React.Dispatch<React.SetStateAction<number[]>> }) {
    const classes = useStyles();
    const displayRange: number = 14;
    const dataList = [];
    const dateT = ["日","月","火","水","木","金","土"];
    const date = props.today;
    date.setDate(props.today.getDate() - displayRange+1);


    const handleClick = (year: number,month: number,date: number) => () => {
        props.setChoiceDate([year,month,date]);
    };


    for (let index: number = displayRange-1; index >= 0; index--) {
        console.log(index+1);
        console.log(date);
        
        dataList.push(<Avatar variant="square" className={classes.square} onClick={handleClick(date.getFullYear(),date.getMonth()+1,date.getDate())}>
            {/* {index+1} */}
            {dateT[date.getDay()]}
            <br></br>
            {/* {date.getFullYear()}/
            {date.getMonth()+1}/ */}
            {date.getDate()}
        </Avatar>)
        date.setDate(props.today.getDate() + 1);

    }
    return (
        <div>
            {dataList.map((data, index) => {
                return data;
            })}
        </div>
        // <div className={classes.home}>
        //     <FormControl className={classes.formControl}>
        //         <InputLabel id="demo-simple-select-label">Pattern</InputLabel>
        //         {/* valueには選択している項目のvalueが設定される */}
        //         <Select
        //             labelId="demo-simple-select-label"
        //             id="demo-simple-select"
        //             value={props.choice}
        //             onChange={handleChange}
        //         >
        //             {userTaskInfo.pattern.map((pattern)=>{
        //                 return <MenuItem value={pattern.patternId}>{pattern.patternName}</MenuItem>
        //             })}
        //         </Select>
        //     </FormControl>
        // </div>
        // {dataList}
        // <Avatar variant="square" className={classes.square}>
        //     N
        // </Avatar>
    );
}
