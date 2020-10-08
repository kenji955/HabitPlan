import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
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
            <button type="button" onClick={handleOpen}>
                react-transition-group
            </button>
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
                            Transition modal{props.value}
                        </h2>
                        <p id="transition-modal-description">
                            react-transition-group animates me.
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
