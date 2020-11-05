import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InputN from "./InputNormal";
import InputR from "./inputRequired";
import AppVar from "./AppVar";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import {
    calendar,
    pattern,
    tasks,
    userTask,
    userTaskInfo,
} from "../../modules/userTasksType";
import SimpleSelect from "./Select";
import { useDispatch } from "react-redux";
import { taskRegister } from "../../modules/tasksModule";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // width: "80%",
            // height: "80%",
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            width: "50%",
            height: "80%",
            overflowY: "scroll",
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    })
);

type newTasksType = {
    [content: string]: string;
};
const contentsList = [
    {
        label: "if-thenプランニング",
        value: "",
    },
    {
        label: "習慣の積み上げ",
        value: "",
    },
    {
        label: "パターン",
        value: "",
    },
    {
        label: "気が進まないとき",
        value: "",
    },
    {
        label: "長期的に見返りのある習慣の即時的な楽しみ",
        value: "",
    },
    {
        label: "目標",
        value: "",
    },
    {
        label: "守れなかった時の罰則",
        value: "",
    },
    {
        label: "レベル",
        value: "",
    },
    {
        label: "避けることで得られるメリット",
        value: "",
    },
    {
        label: "見返りのない習慣に対する即時的な痛み",
        value: "",
    },
];

export default function TaskModal(props: any) {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(false);
    const [choice, setChoice] = React.useState(Number);
    const dispatch = useDispatch();
    // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
    // 最終的には項目一覧もReduxで管理したい。それをタスク一覧の右上に表示した設定ボタンから開くモーダルでONOFFを設定することで、タスク詳細画面で使う項目を選べる。新規登録時もONになっている項目が表示される
    // タスク詳細画面でプラスボタンを押したら項目を増やせる。それも項目一覧に保管される。
    // const defaultTask: newTasksType = { ["追加"]: "追加" };
    const [contents, setContents] = React.useState(contentsList);

    // let newTasks:{[content: string]: string};

    const handleOpen = () => {
        props.setOpen(props.index);
        console.log("props.index" + props.index);
        console.log("props.open" + props.open);
    };

    const handleClose = () => {
        props.setOpen(9999);
    };

    const handleRegister = () => {
        let details: {
            [content: string]: string;
        };
        contents.map((content, index) => {
            details = {
                ...details,
                [content.label]: content.value,
            };
        });
        let newTasks: tasks = {
            detail: details,
            patternInfo: [
                {
                    patternID: choice,
                    order: 1,
                },
            ],
        };

        // ここで編集
        dispatch(taskRegister(newTasks));

        props.setOpen(9999);
    };

    // ここは配列で管理してmapで表示したいところ
    // task型の変数を用意して、それに値を格納する
    // 新規だったら登録、すでにある項目であれば更新する。
    return (
        <div>
            {/* <button type="button" onClick={handleOpen}>
                react-transition-group
            </button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.index == props.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.index == props.open}>
                    <div className={classes.paper}>
                        <AppVar handleRegister={handleRegister} />
                        <h2 id="transition-modal-title">
                            タスク詳細画面{props.index + 1}
                        </h2>
                        <p id="transition-modal-description">
                            react-transition-group animates me.
                        </p>
                        <SimpleSelect choice={choice} setChoice={setChoice} />
                        {contents.map((content, index) => {
                            return (
                                <div>
                                    <InputN
                                        // label="if-thenプランニング"
                                        label={content.label}
                                        required={false}
                                        index={props.index}
                                        contentIndex={index}
                                        contents={contents}
                                        setContents={setContents}
                                    />
                                    <br></br>
                                </div>
                            );
                        })}
                        {/* <InputN
                            label="if-thenプランニング"
                            required={false}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br>
                        <InputN
                            label="習慣の積み上げ"
                            required={false}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br>
                        <InputN
                            label="パターン"
                            required={true}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br>
                        <InputN
                            label="気が進まないとき"
                            required={false}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br>
                        <InputN
                            label="長期的に見返りのある習慣の即時的な楽しみ"
                            required={false}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br>
                        <InputN
                            label="目標"
                            required={false}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br>
                        <InputN
                            label="守れなかった時の罰則"
                            required={false}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br>
                        <InputN
                            label="レベル"
                            required={false}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br>
                        <p>悪い習慣への備え</p>
                        <InputN
                            label="避けることで得られるメリット"
                            required={false}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br>
                        <InputN
                            label="見返りのない習慣に対する即時的な痛み"
                            required={false}
                            index={props.index}
                            newTasks={newTasks}
                            setNewTasks={setNewTasks}
                        />
                        <br></br> */}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
