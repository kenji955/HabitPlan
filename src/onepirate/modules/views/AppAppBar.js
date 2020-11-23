import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
// import Link from '@material-ui/core/Link';
import Link from "next/link";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";

const styles = (theme) => ({
    title: {
        fontSize: 24,
        textDecoration:'none',
        fontFamily: 'Work Sans',
        color: theme.palette.common.white,
        
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: "space-between",
        backgroundColor:'#000',
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    right: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
    },
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    rightLink: {
        fontSize: 16,
        fontFamily: 'Work Sans',
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
        textDecoration:'none',
    },
    linkSecondary: {
        color: theme.palette.secondary.main,
    },
});

function AppAppBar(props) {
    const { classes } = props;

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left} />
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        href="/Home"
                    >
                        {/* {"Habit Plan"} */}
                        <a className={classes.title} >Habit Plan</a>
                    </Link>
                    <div className={classes.right}>
                        <Link
                            color="inherit"
                            variant="h6"
                            // underline="none"
                            // className={classes.rightLink}
                            href="/SignIn"
                        >
                            <a className={classes.rightLink} underline="none" variant="h6">
                                Sign In
                            </a>
                            {/* {'Sign In'} */}
                        </Link>
                        {/* <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/premium-themes/onepirate/sign-up/"
            >
              {'Sign Up'}
            </Link> */}
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
