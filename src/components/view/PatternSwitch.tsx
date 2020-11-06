import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import WifiIcon from "@material-ui/icons/Wifi";
import BluetoothIcon from "@material-ui/icons/Bluetooth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";
import { taskPatternUpdate } from "../../modules/tasksModule";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    })
);

export default function PatternSwitchList(props: {checked: number[],setChecked: React.Dispatch<React.SetStateAction<number[]>>,index:number}) {
    const classes = useStyles();
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();

    // ここでパターンの登録状況を更新する
    const handleToggle = (value: number) => () => {
        const currentIndex = props.checked.indexOf(value);
        const newChecked = [...props.checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        props.setChecked(newChecked);
        console.log('newChecked');
        console.log(newChecked);
        const index = props.index;
        dispatch(taskPatternUpdate({newChecked,index}));
    };

    return (
        <List
            subheader={<ListSubheader>PatternList</ListSubheader>}
            className={classes.root}
        >
            {userTaskInfo.pattern.map((content) => {
                return (
                    <ListItem>
                        {/* <ListItemIcon>
                            <WifiIcon />
                        </ListItemIcon> */}
                        <ListItemText
                            id={content.patternId + "_" + content.patternName}
                            primary={content.patternName}
                        />
                        <ListItemSecondaryAction>
                            <Switch
                                edge="end"
                                onChange={handleToggle(content.patternId)}
                                checked={props.checked.indexOf(content.patternId) !== -1}
                                inputProps={{
                                    "aria-labelledby": content.patternId + "_" + content.patternName,
                                }}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}
