import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import Link from "next/link";
// import backgroundImage from '../../../image/bg-calendar.svg';

const backgroundImage = "/static/bg-calendar.svg";
// const backgroundImage = '../../../image/bg-calendar.svg';

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
    },
    button: {
        minWidth: 200,
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

function ProductHero(props) {
    const { classes } = props;

    return (
        <ProductHeroLayout backgroundClassName={classes.background}>
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: "none" }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography
                color="inherit"
                align="center"
                variant="h2"
                marked="center"
            >
                生活に合わせた習慣で、<br></br>一歩ずつなりたい自分に近づきましょう
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                className={classes.h5}
            >
                習慣は自由を制限しません。自由を作り出します。<br></br>
                より良い習慣でより良い信念を形作ることができます。
            </Typography>
            <Link href="/SignIn">
                <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                    
                >
                    サインイン
                </Button>
            </Link>
            <Typography
                variant="body2"
                color="inherit"
                className={classes.more}
            >
                まずは気軽にお試しください。
            </Typography>
        </ProductHeroLayout>
    );
}

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
