// データベースへの接続

// import firebase from "firebase/app";
// 認証周りやDB周りで必要なためimportしておく
import "firebase/auth";
import "firebase/database";
import { useMemo, useState, useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../modules/rootReducer";
import { Register } from "../../../modules/tasksModule";

import { firebase } from "./firebaseTest";

import {
    calendar,
    pattern,
    tasks,
    userTask,
    userTaskInfo,
} from "../../../modules/userTasksType";
import { useTabContext } from "@material-ui/lab";
import { login } from "../../../modules/userModule";

const useReduxFetch = () => {
    const dispatch = useDispatch();
    return dispatch;
};

// カスタムフックにしておく
const useDatabase = () => {
    // const useDatabase = () => {
    const { userId } = useSelector((state: RootState) => state.user);
    // const dispatch = useDispatch();
    // const [check, setCheck] = useState(false);
    // const [userIdCheck, setuserIdCheck] = useState('');
    // if (userId != '' && userId != userIdCheck){
    //     console.log('userId');
    //     console.log(userId);
    //     console.log('check');
    //     console.log(check);
    //     console.log('userIdCheck');
    //     console.log(userIdCheck);
    //     setuserIdCheck(userId);
    //     setCheck(!check);
    // }
        // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
        // return useMemo(() => firebase.database().ref("/sample"), []);
        // const authUser = firebase.auth().currentUser;
        // if (!!uid) {
        //     if (userId == "") {
        //         dispatch(login(uid.uid));
        //         setCheck("check");
        //         // console.log("check");
        //     }

        //     // console.log("DBF 1 userId");
        //     // console.log(userId);
        //     return useMemo(() => firebase.database().ref("/users/" + userId), [
        //         userId,
        //     ]);
        // } else {
        // ここが原因。ここでuserId取得後にrefを更新できればいい
        console.log("DBF 2 userId");
    console.log(userId);
    return useMemo(() => firebase.database().ref("/users/" + userId), [
        userId,
    ]);
    // return useMemo(() => firebase.database().ref("/users/" + authUser.uid), []);
    // }
};

//   データを取得する
// hooksを使いたいのでカスタムhooksにしておく
const useFetchData = (ref: firebase.database.Reference) => {
    const [data, setData] = useState<userTaskInfo>();
    useEffect(() => {
        // イベントリスナーを追加するにはonを使う
        ref.on("value", (snapshot: any) => {
            // パスに対する全データを含むsnapshotが渡される
            // ない場合はnullが返るので存在をチェックしておく
            if (snapshot?.val()) {
                setData(snapshot.val());
                console.log("DBF data");
                console.log(data);
            }
        });
        console.log("DBFetch data==========");
        console.log(data);
        return () => {
            ref.off();
        };
        // refの変更に応じて再取得する
        //   指定したパスのデータに対する更新をすべて検知するにはvalueを指定すれば良い。
    }, [ref]);
    // データを返却する
    return { data };
};

// 実際に呼び出す際はこちらを使う
const useFetchAllData = () => {
    const uid = firebase.auth().currentUser;
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
    // refを取得して
    const ref = useDatabase();
    console.log('ref');
    console.log(ref);
    // ref渡してデータを取得する
    return useFetchData(ref);
};

// 登録処理
// この登録はsetに渡した値での登録となる。
// つまり、既存のデータも含めて渡してあげないと登録済みのデータが消える。
const useSetDocument = (ref: firebase.database.Reference) => {
    const updateDocument = useCallback(
        (document: unknown) => {
            // refについては前回の記事参照
            // setに登録したいデータを渡してあげれば登録できる
            ref.set(document);
        },
        [ref]
    );
    return updateDocument;
};

const useRegisterData = () => {
    // 前回作ったuseDatabase()を使いref取得
    const ref = useDatabase();
    const setDocument = useSetDocument(ref);
    // 登録済みのデータを全部取得する
    const { data: registeredData } = useFetchAllData();
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
    // データを登録する関数を返却する

    // 可能であればここの処理はそのままにして、引数でsteteを更新する処理を先に行いたい
    const registerData = useCallback(
        (registerData: { [key: string]: string }) => {
            // () => {
            // console.log(userTaskInfo);
            // ここでReduxに保管しているstateを更新する？
            // dispatch(Register({ ...registerData }));
            // 既存のデータと登録するkey-valueを合わせて登録関数に渡す
            // setDocument({ ...registeredData, ...registerData });
            setDocument(userTaskInfo);
        },
        [setDocument, registeredData]
    );

    // 返した関数を利用することで、登録済みデータ全て+登録したいデータをDBに保管できる
    return registerData;
};

// 更新処理
const useUpdateDocument = (ref: firebase.database.Reference) => {
    // ref.updateがObjectを受け取るので、Objectを引数に取る関数を定義
    const updateDocument = useCallback(
        (document: Object) => ref.update(document),
        [ref]
    );
    return updateDocument;
};

const useUpdateData = () => {
    // setの時と同じくrefを取得して、
    const ref = useDatabase();
    // 関数呼び出して
    const updateDocument = useUpdateDocument(ref);
    // 更新処理を作成する
    const updateData = useCallback(
        (registerData: { [key: string]: string }) => {
            updateDocument(registerData);
        },
        [updateDocument]
    );
    return updateData;
};

// 削除処理
const useRemoveDocument = (ref: firebase.database.Reference) => {
    // 特に引数が必要ないのでただ呼び出すのみ
    const deleteDocument = useCallback(
        (document: string) => ref.child(document).remove(),
        [ref]
    );
    return deleteDocument;
};
// set、updateと同じなので割愛
const useDelteData = () => {
    const ref = useDatabase();
    const removeDocument = useRemoveDocument(ref);
    const deleteData = useCallback(
        (deleteData: string) => removeDocument(deleteData),
        [removeDocument]
    );
    return deleteData;
};

export { useFetchAllData, useRegisterData, useUpdateData, useDelteData };
