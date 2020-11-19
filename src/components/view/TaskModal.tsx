import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InputN from "./InputNormal";
import AppVar from "./AppVar";
import { tasks } from "../../modules/userTasksType";
import PatternSwitchList from "./PatternSwitch";
import { useDispatch, useSelector } from "react-redux";
import { taskRegister } from "../../modules/tasksModule";
import { RootState } from "../../modules/rootReducer";
import { useRegisterData, useUpdateData } from "../test/firebaseTest/DBFetch";

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
    {
        label: "タスク名",
        value: "",
    },
];

export default function TaskModal(props: any) {
    const classes = useStyles();
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
    const updateData = useUpdateData();
    const registerData = useRegisterData();

    const checkNew = userTaskInfo.tasks.length < parseInt(props.index);
    let stateChecked: number[] = [];
    const renderContentsList = contentsList.filter((content) => {
        return content.label != 'タスク名'
    })
    let setContentsList = contentsList;
    if (!checkNew) {
        stateChecked = props.task.patternInfo.map(
            (content: { patternID: number; order: number }) => {
                return content.patternID;
            }
        );
        setContentsList = contentsList.filter((content) => {
            return content.label != 'タスク名'
        })
    }
    const [checked, setChecked] = React.useState<number[]>(stateChecked);
    const dispatch = useDispatch();
    // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
    // 最終的には項目一覧もReduxで管理したい。それをタスク一覧の右上に表示した設定ボタンから開くモーダルでONOFFを設定することで、タスク詳細画面で使う項目を選べる。新規登録時もONになっている項目が表示される
    // タスク詳細画面でプラスボタンを押したら項目を増やせる。それも項目一覧に保管される。
    // const defaultTask: newTasksType = { ["追加"]: "追加" };
    const [contents, setContents] = React.useState(setContentsList);

    const handleClose = () => {
        props.setOpen(9999);
    };

    async function HandleRegister() {
        let details: {
            [content: string]: string;
        };
        contents.map((content, index) => {
            details = {
                ...details,
                [content.label]: content.value,
            };
        });

        let patternInfo: {
            patternID: number;
            order: number;
        }[];

        patternInfo = checked.map((content) => {
            return {
                patternID: content,
                order: 1,
            };
        });

        let newTasks: tasks = {
            detail: details,
            patternInfo: patternInfo,
        };

        await dispatch(taskRegister(newTasks));
        console.log('==============check register==============');
        // console.log(userTaskInfo);
        // const _sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        // await _sleep(5000);
        // console.log(userTaskInfo);
        // console.log(componentWillReceiveProps(nextProps));
        
        // registerData(newTasks);

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
                        <AppVar
                            handleRegister={HandleRegister}
                            checkNew={checkNew}
                            index={props.index}
                            contents={contents}
                            setContents={setContents}
                        />
                        <h2 id="transition-modal-title">
                            タスク詳細画面{props.index + 1}
                        </h2>
                        <p id="transition-modal-description">
                            react-transition-group animates me.
                        </p>
                        {/* ここを要修正。パターンは選択式ではいけない。複数登録する可能性があるため。登録済み以外のリストをfliterで作成して表示、とかかな。 */}
                        {/* <SimpleSelect choice={choice} setChoice={setChoice} /> */}
                        <PatternSwitchList
                            checked={checked}
                            setChecked={setChecked}
                            index={props.index}
                            checkNew={checkNew}
                        />
                        {renderContentsList.map((content, index) => {
                            return (
                                <div key={content.label + "_" + index}>
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
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
