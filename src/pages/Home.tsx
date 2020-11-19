
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ResponsiveDrawer from '../components/view/ResponsiveDrawer';
import SimpleSelect from "../components/view/Select";
import Calendar3 from "../components/test/Calendar3";
import React from "react";

import withAuth from '../components/shared/withAuth'
import { useSelector } from "react-redux";
import { RootState } from "../modules/rootReducer";
import Index from '../onepirate/Home';


const Home = () => {
    return (
        <Index />

    );
};

export default withAuth(Home);
