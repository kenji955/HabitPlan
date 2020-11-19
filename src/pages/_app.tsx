import React, { createContext } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { StoreProvider } from "../modules/store";

export const UserContext = createContext('');
const HabitPlanApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <StoreProvider>
                <Component {...pageProps} />
            </StoreProvider>
        </Provider>
    );
};

export default HabitPlanApp;
