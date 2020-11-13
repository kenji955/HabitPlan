import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { green } from "@material-ui/core/colors";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            "& > *": {
                margin: theme.spacing(1),
            },
        },
        square: {
            // color: theme.palette.getContrastText(deepOrange[500]),
            // backgroundColor: deepOrange[500],
            display: "inline-flex",
            margin: "0 3px",
            textAlign: "center",
            // width:'100px',
        },
        rounded: {
            color: "#fff",
            backgroundColor: green[500],
        },
    })
);

// export default function DateList(props: { choice: number, setChoice: React.Dispatch<React.SetStateAction<number>> }) {
export default function DateList(props: {
    today: Date;
    setChoiceDate: React.Dispatch<React.SetStateAction<number[]>>;
}) {
    const classes = useStyles();
    const displayRange: number = 14;
    const dataList = [];
    const dateT = ["日", "月", "火", "水", "木", "金", "土"];
    const date = props.today;
    date.setDate(props.today.getDate() - displayRange + 1);

    const handleClick = (year: number, month: number, date: number) => () => {
        props.setChoiceDate([year, month, date]);
    };

    for (let index: number = displayRange - 1; index >= 0; index--) {

        dataList.push(
            <Avatar
                key={date.getFullYear()+"_"+date.getMonth()+1+"_"+date.getDate()}
                variant="square"
                className={classes.square}
                onClick={handleClick(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    date.getDate()
                )}
            >
                {dateT[date.getDay()]}
                <br></br>
                {date.getDate()}
            </Avatar>
        );
        date.setDate(props.today.getDate() + 1);
    }
    return (
        <div>
            {dataList.map((data, index) => {
                return data;
            })}
        </div>
    );
}
