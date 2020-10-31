import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InputN from "./InputNormal";
import InputR from "./inputRequired";

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

export default function TaskModal(props: any) {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        props.setOpen(props.index);
        console.log("props.index" + props.index);
        console.log("props.open" + props.open);
    };

    const handleClose = () => {
        props.setOpen(9999);
    };

    // console.log("props.index" + props.index);
    // console.log("props.open" + props.open);
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
                        <h2 id="transition-modal-title">
                            タスク詳細画面{props.index + 1}
                        </h2>
                        <p id="transition-modal-description">
                            react-transition-group animates me.
                        </p>
                        <InputN label="if-thenプランニング" required={false} index={props.index} />
                        <br></br>
                        <InputN label="習慣の積み上げ" required={false} index={props.index} />
                        <br></br>
                        <InputN label="パターン" required={true} index={props.index} />
                        <br></br>
                        <InputN label="気が進まないとき" required={false} index={props.index} />
                        <br></br>
                        <InputN label="長期的に見返りのある習慣の即時的な楽しみ" required={false} index={props.index} />
                        <br></br>
                        <InputN label="目標" required={false} index={props.index} />
                        <br></br>
                        <InputN label="守れなかった時の罰則" required={false} index={props.index} />
                        <br></br>
                        <InputN label="レベル" required={false} index={props.index} />
                        <br></br>
                        <p>悪い習慣への備え</p>
                        <InputN label="避けることで得られるメリット" required={false} index={props.index} />
                        <br></br>
                        <InputN label="見返りのない習慣に対する即時的な痛み" required={false} index={props.index} />
                        <br></br>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
