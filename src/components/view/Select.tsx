import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/rootReducer";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import { patternDelete, patternNameEdit, patternRegister } from "../../modules/tasksModule";
import PatternAddMenu from './PatternAddMenu';
import PatternDeleteMenu from './PatternDeleteMenu';
import PatternEditMenu from './PatternEditMenu';

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
            width: 'fit-content',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        icons: {
            width: 'fit-content',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        icon: {
            margin: theme.spacing(2),
        },
    })
);

export default function SimpleSelect(props: { choice: number, setChoice: React.Dispatch<React.SetStateAction<number>> }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [pattern, setPattern] = React.useState("");
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);

    const [openMenu, setOpenMune] = React.useState(9999);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    useEffect(
        () => {
            if (props.choice == 0 && userTaskInfo.pattern.length > 0) {
                props.setChoice(userTaskInfo.pattern[0].patternId);
                console.log(userTaskInfo.pattern[0].patternId);
            }
            if (userTaskInfo.pattern.length == 0) {
                console.log('check length 0');
                props.setChoice(0);
            }
        }, []
    );

    // props.setChoice(userTaskInfo.pattern[0].patternId);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPattern(event.target.value as string);
        props.setChoice(event.target.value as number);
    };

    const handleClick = (value: number) => (event: { currentTarget: React.SetStateAction<HTMLElement>; }) => {
        setAnchorEl(event.currentTarget);
        setOpenMune(value);
        console.log("openMenu:" + openMenu);
    };

    const patternAddHandler = (patternName: string) => {
        console.log("Patterntest patternAddHandler");
        dispatch(patternRegister(patternName));
    };
    const patternDeleteHandler = (patternName: string) => {
        // 削除時、未来に登録されているパターンは削除する必要がある
        console.log("Patterntest patternDeleteHandler");
        dispatch(patternDelete(props.choice));
        props.setChoice(0);
    };
    // パターン名称編集用処理。選択されているパターンIDと引数で取得した新しい名称をReduxActionへ連携する。
    const patternEditHandler = (patternName: string) => {
        console.log("Patterntest patternEditHandler");
        const editPatternId = props.choice;
        dispatch(patternNameEdit({ editPatternId, patternName }));
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
                    {userTaskInfo.pattern.map((pattern, index) => {
                        return <MenuItem key={index + "_" + pattern.patternName} value={pattern.patternId}><span>{pattern.patternName}</span></MenuItem>
                    })}
                </Select>
            </FormControl>
            <div className={classes.icons}>
                <IconButton
                    edge="end"
                    size="small"
                    aria-label="comments"
                    onClick={handleClick(1)}
                >
                    <AddCircleIcon color="primary" className={classes.icon} />
                </IconButton>
                <PatternAddMenu openMenu={openMenu} setOpenMune={setOpenMune} anchorEl={anchorEl} Handler={patternAddHandler} index={1} />

                <IconButton
                    edge="end"
                    size="small"
                    aria-label="comments"
                    onClick={handleClick(2)}
                >
                    <RemoveCircleIcon color="secondary" className={classes.icon} />
                </IconButton>
                <PatternDeleteMenu openMenu={openMenu} setOpenMune={setOpenMune} anchorEl={anchorEl} Handler={patternDeleteHandler} index={2} />

                <IconButton
                    edge="end"
                    size="small"
                    aria-label="comments"
                    onClick={handleClick(3)}
                >
                    <EditIcon className={classes.icon} />
                </IconButton>
                <PatternEditMenu openMenu={openMenu} setOpenMune={setOpenMune} anchorEl={anchorEl} Handler={patternEditHandler} index={3} />
            </div>

        </div>
    );
}
