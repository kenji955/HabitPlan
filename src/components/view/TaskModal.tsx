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
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            maxWidth: "80%",
            maxHeight: "80%",
            overflowY:'scroll',
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
        props.setOpen(props.value);
        console.log("props.value" + props.value);
        console.log("props.open" + props.open);
    };

    const handleClose = () => {
        props.setOpen(9999);
    };

    return (
        <div>
            {/* <button type="button" onClick={handleOpen}>
                react-transition-group
            </button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.value == props.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.value == props.open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">
                            タスク詳細画面{props.value}
                        </h2>
                        <p id="transition-modal-description">
                            react-transition-group animates
                            me.react-transition-group animates
                            me.react-transition-group animates
                            me.react-transition-group animates
                            me.react-transition-group animates
                            me.react-transition-group animates
                            me.react-transition-group animates me.
                        </p>
                        <InputN label="if-thenプランニング" /><br></br>
                        <InputN label="習慣の積み上げ" /><br></br>
                        <InputR label="パターン" /><br></br>
                        <InputN label="気が進まないとき" /><br></br>
                        <InputN label="長期的に見返りのある習慣の即時的な楽しみ" /><br></br>
                        <InputN label="目標" /><br></br>
                        <InputN label="守れなかった時の罰則" /><br></br>
                        <InputN label="レベル" /><br></br>
                        <p>悪い習慣への備え</p>
                        <InputN label="避けることで得られるメリット" /><br></br>
                        <InputN label="見返りのない習慣に対する即時的な痛み" /><br></br>
                        <InputR label="testR" /><br></br>
                        <InputR label="testR" /><br></br>
                        <InputR label="testR" /><br></br>
                        <InputR label="testR" /><br></br>
                        <InputR label="testR" /><br></br>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
