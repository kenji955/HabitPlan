import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface props {
    label: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: "25ch",
            },
        },
    })
);

export default function FormPropsTextFields(props: props) {
    const classes = useStyles();

    return (
        // <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label={props.label} />
        // </form>
    );
}
