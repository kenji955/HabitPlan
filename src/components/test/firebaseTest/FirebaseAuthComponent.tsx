import React, { useState, useEffect } from "react";
import { firebase } from "./firebaseTest";
import { login, logout } from "../../../modules/userModule";
import { init, allDelete } from "../../../modules/tasksModule";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../modules/rootReducer";
import { useFetchAllData } from "./DBFetch";
import { Dispatch } from "@reduxjs/toolkit";

const useReduxFetch = () => {
    const dispatch = useDispatch();
    return dispatch;
};

// ログイン、ログアウトボタン実装
export default function FirebaseAuthComponent() {
    const loggedin = useFirebaseLogin();
    const dispatch = useReduxFetch();
    if (!loggedin) {
        // ログインしていなければログインボタンを表示
        return <button onClick={() => signInWithPopup()}>ログイン</button>;
    }
    // ログインしているならログアウトボタンを表示
    return <button onClick={() => useSignOut(dispatch)}>ログアウト</button>;
}

// ログイン処理
const signInWithPopup = () => {
    // Googleプロバイダオブジェクトのインスタンスを作成
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    // dispatch(login(userIdCheck));
    // 別タブでログイン画面に飛ばしたいため、signInWithPopupを使う
    // リダイレクトでログイン画面に飛ばしたい場合はsignInWithRedirectを使う
    return firebase.auth().signInWithPopup(googleAuthProvider);
};

// ログアウト処理
const useSignOut = (dispatch: Dispatch<any>) => {
    // signOutを呼び出すだけでOK
    // const dispatch = useReduxFetch();
    dispatch(logout());
    dispatch(allDelete());
    return firebase.auth().signOut();
};

// ログインしているかチェックするカスタムフックを作る
const useFirebaseLogin = () => {
    // stateでログイン状態を保持
    const [loggedin, setLoggedin] = useState(false);
    const dispatch = useReduxFetch();

    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);

    useEffect(() => {
        // 現在ログインしているユーザを取得
        firebase.auth().onAuthStateChanged((user) => {
            // ユーザ情報が取れればログイン状態
            let userIdCheck: string;
            console.log('FAC !!user');
            console.log(!!user);
            if (!!user) {
                userIdCheck = user.uid;
                // console.log('data');
                // console.log(data);
                // dispatch(init(data));
                console.log('FAC userTaskInfo.calendar[0].PatternId');
                // console.log(userTaskInfo.calendar[0].PatternId);
                // これをreduxで管理する
                // dispatch(login(userIdCheck));
            }

            setLoggedin(!!user);
        });
    }, []);
    // ログイン情報を返却
    return loggedin;
};
