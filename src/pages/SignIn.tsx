import React from "react";

import withAuth from "../components/shared/withAuth";
import SignIn from '../components/view/SignIn';
import AppAppBar from "../onepirate/modules/views/AppAppBar";

const SignInPage = () => {
    return (
        <React.Fragment>
            <AppAppBar />
            <SignIn />
        </React.Fragment>
    );
};

export default withAuth(SignInPage,'SignIn');
