import React, { useState } from "react";
import router from "next/router";
import { auth } from "../test/firebaseTest/firebaseTest";
import DayPlan from "../../pages/DayPlan";
import App from '../../pages/index';


export default function withAuth(Component: any,pageName:string) {
    // const [status,setStatus] = useState('LOADING');
    return class extends React.Component<any, {status: string}> {
        constructor(props: any) {
            super(props);
            this.state = {
                status: "LOADING",
            };
        }

        componentDidMount() {
            auth.onAuthStateChanged((authUser) => {
                console.log(authUser);
                if (authUser) {
                    this.setState({
                        status: "SIGNED_IN",
                    });
                    //   setStatus('SIGNED_IN')
                } else {
                    if(pageName == 'SignIn'){
                        router.push("/SignIn");
                    }else {
                        router.push("/Home");
                    }
                }
            });
        }

        renderContent() {
            const status  = this.state.status;
            console.log(status);
            if (status == "LOADING") {
                if(pageName == 'SignIn' || pageName == 'Home'){
                    return <Component {...this.props} />;
                }
                return <h1>Loading ......</h1>;
            } else if (status == "SIGNED_IN") {
                if(pageName == 'SignIn'){
                    // router.push("/DayPlan");
                    return <App />
                }
                return <Component {...this.props} />;
            }
        }
        render() {
            return <>{this.renderContent()}</>;
        }
    };
}
// export default withAuth;
