import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        home: {
            width:'fit-content',
            margin:'auto',
        },
    })
);

export default function SimpleSelect(props: { choice: number, setChoice: React.Dispatch<React.SetStateAction<number>> }) {
    const classes = useStyles();
    const [pattern, setPattern] = React.useState("");
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
    console.log('pattern'+pattern);
    console.log('props.choise'+props.choice);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPattern(event.target.value as string);
        props.setChoice(event.target.value as number);
    };

    return (
        <div className={classes.home}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Pattern</InputLabel>
                {/* valueには選択している項目のvalueが設定される */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.choice}
                    onChange={handleChange}
                >
                    {userTaskInfo.pattern.map((pattern)=>{
                        return <MenuItem value={pattern.patternId}>{pattern.patternName}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}
