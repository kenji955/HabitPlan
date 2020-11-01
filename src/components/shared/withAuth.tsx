import React, { useState } from "react";
import router from "next/router";
import { auth } from "../test/firebaseTest/firebaseTest";

export default function withAuth(Component: any) {
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
                if (authUser) {
                    this.setState({
                        status: "SIGNED_IN",
                    });
                    //   setStatus('SIGNED_IN')
                } else {
                    router.push("/");
                }
            });
        }

        renderContent() {
            const status  = this.state.status;
            console.log(status);
            if (status == "LOADING") {
                // return <h1>Loading ......</h1>;
            } else if (status == "SIGNED_IN") {
                return <Component {...this.props} />;
            }
        }
        render() {
            return <>{this.renderContent()}</>;
        }
    };
}
// export default withAuth;
