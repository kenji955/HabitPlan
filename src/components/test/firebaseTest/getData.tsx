import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useFetchAllData } from "./DBFetch";
import firebase from "firebase/app";
// 認証周りやDB周りで必要なためimportしておく
import "firebase/auth";
import "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../modules/rootReducer";
import { userTask } from "../../../modules/userTasksType";
import { init } from "../../../modules/tasksModule";



export default function ListComponent() {
    const [UT, setUT] = useState(
        useSelector((state: RootState) => state.tasks)
    );
    const { userId } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const { data } = useFetchAllData();
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
    useEffect(() => {
      // dataを取ってくる
      if (userId != '' && !!data) {
        console.log(userId);
        console.log("getData.tsx data");
        console.log(data);
        dispatch(init(data));
        // setUT(useSelector((state: RootState) => state.tasks));
      }
    },[userId]);
    
    // ここでstateを使うならログイン時にDBから取得したデータをReduxに保管する必要がある。
    // useCallback(() => {
    //     userTask = useSelector((state: RootState) => state.tasks);
    // }, [userId]);

    console.log("getData userTaskInfo");
    console.log(userTaskInfo);
    // data ? console.log(data.userTaskInfo) : console.log('noo');
    // object形式なので使いやすいように{key, value}形式のリストに変換する
    // また、データが変わらない限り結果は同じなのでメモ化しておく
    // const dataList = useMemo(() => Object.entries(data || {}).map(([key, value]) => ({ key, value })), [data]);

    return <div>test</div>;
    // return <div>{userTaskInfo.calendar[0].PatternId}</div>;
    // <dl>{dataList.map(({ key, value }) =>
    //   <React.Fragment key={`${key}${value}`}>
    //     <dt>key: {key}</dt>
    //     <dt>value: {value}</dt>
    //   </React.Fragment>
    // )}</dl>
}
