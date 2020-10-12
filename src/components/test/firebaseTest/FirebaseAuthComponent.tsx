import React, { useState, useEffect } from "react";
import { firebase } from "./firebaseTest";

// ログイン、ログアウトボタン実装
export default function FirebaseAuthComponent() {
    const loggedin = useFirebaseLogin();
    if (!loggedin) {
        // ログインしていなければログインボタンを表示
        return <button onClick={() => signInWithPopup()}>ログイン</button>;
    }
    // ログインしているならログアウトボタンを表示
    return <button onClick={() => signOut()}>ログアウト</button>;
}

// ログイン処理
const signInWithPopup = () => {
    // Googleプロバイダオブジェクトのインスタンスを作成
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    // 別タブでログイン画面に飛ばしたいため、signInWithPopupを使う
    // リダイレクトでログイン画面に飛ばしたい場合はsignInWithRedirectを使う
    return firebase.auth().signInWithPopup(googleAuthProvider);
};

// ログアウト処理
const signOut = () => {
    // signOutを呼び出すだけでOK
    return firebase.auth().signOut();
};

// ログインしているかチェックするカスタムフックを作る
const useFirebaseLogin = () => {
    // stateでログイン状態を保持
    const [loggedin, setLoggedin] = useState(false);
    useEffect(() => {
        // 現在ログインしているユーザを取得
        firebase.auth().onAuthStateChanged((user) => {
            // ユーザ情報が取れればログイン状態
            setLoggedin(!!user);
        });
    }, []);
    // ログイン情報を返却
    return loggedin;
};
